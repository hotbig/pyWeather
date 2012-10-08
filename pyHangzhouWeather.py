################################################################################
#   Copyright (C) <2012>  <Yang.Biao>

#   This program is free software: you can redistribute it and/or modify
#   it under the terms of the GNU General Public License as published by
#   the Free Software Foundation, either version 3 of the License, or
#   (at your option) any later version.

#    This program is distributed in the hope that it will be useful,
#    but WITHOUT ANY WARRANTY; without even the implied warranty of
#    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
#    GNU General Public License for more details.

#    You should have received a copy of the GNU General Public License
#    along with this program.  If not, see <http://www.gnu.org/licenses/>.
################################################################################

# -*- coding: utf-8 -*-
import sys, urllib, re, chardet
from HTMLParser import HTMLParser
from datetime import date, time, datetime, timedelta
		
class HalfDayWeather():
	def __init__(self, weather, temprature):
		self.weather    = weather
		self.temprature = temprature

class DayWeather():
	def __init__(self, daytime, nighttime):
		self.daytime   = daytime   # daytime weather
		self.nighttime = nighttime # nighttime weather
		
class CityDayWeather():
	def __init__(self, date, location, weather):
		self.date = date
		self.location = location
		self.weather = weather
		
# create a subclass and override the handler methods
class MyHTMLParser(HTMLParser):
	def __init__(self, file):
		HTMLParser.__init__(self)

		self.in_table = False
		self.file     = file
		
	def handle_data(self, data):
		if self.in_table and self.match_empty(data):
			#print "data", data
			self.handle.write("%s\n" % data)
			
	def handle_comment(self, data):
		if cmp("day 1", data) == 0:
			self.in_table = True
			self.handle   = open(self.file, 'w')
			
		if cmp("day 4", data) == 0:
			self.in_table = False
			self.handle.close()	
			
	def handle_starttag(self, tag, attrs):
		pass

	def handle_endtag(self, tag):
		pass

	def match_empty(self, data):
		pattern = "[\s]+$"
		all_match = True
		
		lines = data.split('\n')
		for line in lines:
			matched = re.match(pattern, line, flags=0)
			if matched != None:
				all_match = False
				break;	
				
		return all_match
		
def process():
	proxies = {'http': 'http://10.144.1.10:8080'}
	url = "http://www.weather.com.cn/weather/101210101.shtml"
	
	handle = urllib.urlopen(url, proxies=proxies)
	html = handle.read()

	parser = MyHTMLParser("test.txt")
	parser.feed(html)

def convert_temperature(string):
	"""Always get the two character"""
	return int(string[:2])

def convert_weather(string):
	"""Establish a database for this"""
	cn2en = {'晴':   'Sun',         \
	        '多云':  'Cloudy',       \
			'阴':    'yin'}
	
	return cn2en[string]

def getwt(lines, date):
	dateweek    = '%s日星期%s' % (date.day, weekday(date))
	temprature  = -100
	weather     = ""
	index       = 0
	
	print date
	for item in lines:
		if item == dateweek:
			if lines[index + 1] == '白天':
				weather = convert_weather(lines[index + 2])
				temprature = convert_temperature(lines[index + 4])
				print "      day: %s %s" % (weather, temprature)
				index = index + 4
			if lines[index + 1] == "夜间":
				weather = convert_weather(lines[index + 2])
				temprature = convert_temperature(lines[index + 4])
				print "      night: %s %s" % (weather, temprature)
			break;
				
		index = index + 1

def read_weather(filename):
	handle = open(filename, 'r')
	lines  = handle.read().split()

	today = datetime.now().date()
	
	# Collect the weather infos from today
	for index in range(0, 3):
		date = today + timedelta(index)
		getwt(lines, date)

	handle.close()
	return lines

def half_day():
	""" Check if half day """
	now  = datetime.now()
	time = time()
	
	return time.hour >= 12

def weekday(date):
	""" Return the cn weekday"""
	weekdays = ['一','二','三','四','五','六', '日']
	index = datetime.weekday(date)
	
	return weekdays[index]

def convert(lines):
	dict_en    = {# day or night
				  'daytime':    '白天',      \
	              'nighttime':  '夜间',      \
				  # weather
				  'sun':        '晴',       \
				  'cloudy':     '多云',      \
				  # high or low temp
				  'high':       '高温',      \
				  'low':        '低温',      \
				  # day format
				  'date':  '日星期'
				 }
	
	dict_cn    = {# day or night
				  '白天':'daytime',         \
	              '夜间':'nighttime',       \
				  # weather
				  '晴':'sun',              \
				  '多云':'cloudy',          \
				  # high or low temp
				  '高温':'high',            \
				  '低温':'low',             \
				  # day format
				  '日星期':'date'
				 }

	list = []
	
	for line in lines:
	
		if dict_cn.has_key(line):
			list.append(dict_cn[line])
			
		elif line.find(dict_en['date']) != -1:
			list.append('date')
			
		elif line[0] > '0' and line[1] < '9':
			# BUG BUG BUG BUG BUG !!!!
			list.append(int(line[:2]))
			
		else:
			# Skip the fault
			print "Error reported!"

	return list

if __name__ == "__main__":
	process()
	lines = read_weather("test.txt")
	convert(lines)
	#check_date()