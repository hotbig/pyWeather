################################################################################
#   Copyright (C) <2012>  <Yang.Biao>
#
#   This program is free software: you can redistribute it and/or modify
#   it under the terms of the GNU General Public License as published by
#   the Free Software Foundation, either version 3 of the License, or
#   (at your option) any later version.
#
#    This program is distributed in the hope that it will be useful,
#    but WITHOUT ANY WARRANTY; without even the implied warranty of
#    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
#    GNU General Public License for more details.
#
#    You should have received a copy of the GNU General Public License
#    along with this program.  If not, see <http://www.gnu.org/licenses/>.
################################################################################
# -*- coding: utf-8 -*-
import sys, cn2en
sys.path.append("..")
from datetime import date, time, datetime, timedelta
from definition.weather import Weather

def dateweek(line, date):
	""" Check if current line is the dateweek line, return boolean """
	index    = datetime.weekday(date)
	dateweek = '%s%s%s' % (date.day, cn2en.DATE_WEEK, cn2en.WEEKDAYS[index])
	
	return dateweek == line

def trans_temperature(string):
	"""Get the two character of the string. It's a bug. """
	return int(string[:2])

def trans_weather(string):
	"""Establish a database for this"""
	return cn2en.WEATHER[string]

def trans_daynight(string):
	return cn2en.DAY_NIGHT[string]

def create_weather(lines, date):
	daynight    = trans_daynight(lines[0])
	weather     = trans_weather(lines[1])
	temperature = trans_temperature(lines[2])
	
	return Weather(date, daynight, weather, temperature)

def translate(lines):
	date     = datetime.now().date()
	weathers = []
	index    = 0
	
	while(index < len(lines)):
		if dateweek(lines[index], date):
			index   = index + 1
			weather = create_weather(lines[index:index+3], date)
			weathers.append(weather)
			
			if(weather.time == 'Daytime'):
				index   = index + 3
				weather = create_weather(lines[index:index+3], date)
				weathers.append(weather)
				
			date  = date + timedelta(1)
			index = index + 3
		else:
			index = index + 1
#	print_weathers(weathers)
	return weathers

def print_weathers(weathers):
	for weather in weathers:
		print weather.date
		print weather.time
		print weather.weather
		print weather.temp

if __name__ == "__main__":
	lines = open("test1.txt").read().split()
	print_weathers(translate(lines))
	
