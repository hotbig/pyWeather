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
import sys, re, cn2en
sys.path.append("..")
from HTMLParser import HTMLParser
from trans import translate
from store import Storage

# create a subclass and override the handler methods
class MyHTMLParser(HTMLParser):
	def __init__(self, store):
		HTMLParser.__init__(self)

		self.in_table = False
		self.store     = store
		self.lines    = []
		#self.store    = Storage("weather.store")
		#self.store.open()
		
	def handle_data(self, data):
		if self.in_table and self.match(data):
			#self.handle.write("%s\n" % data)
			self.filter(data)
			
	def handle_comment(self, data):
		if cmp("day 1", data) == 0:
			self.in_table = True
			#self.handle   = open(self.file, 'w')
			
		if cmp("day 4", data) == 0:
			self.in_table = False
			#self.handle.close()	
			weathers = translate(self.lines)
			self.store.write(weathers)

	def match(self, data):
		pattern = "[\s]+$"
		all_match = True
		
		lines = data.split('\n')
		for line in lines:
			matched = re.match(pattern, line, flags=0)
			if matched != None:
				all_match = False
				break;	
				
		return all_match

	def filter(self, data):
		if data != cn2en.HIHG_LOW['HIGH'] and data != cn2en.HIHG_LOW['LOW']:
			#self.handle.write("%s\n" % data)
			self.lines.append(data)
			
if __name__ == "__main__":
	data = "data/test.htm"

	handle = open(data)
	html = handle.read()

	store = Storage("test.store")
	store.open()
	
	parser = MyHTMLParser(store)
	parser.feed(html)
	store.close()
	
	weathers = store.read()
	
	for weather in weathers:
		weather.printf()
