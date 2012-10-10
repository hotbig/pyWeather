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
from parser.parser import *
from weather       import *
from store         import *
from settings      import *
import urllib

def printf(city, weathers):
	print "[%s]" % city
	print "--------------------------------------------"
	
	for weather in weathers:
		weather.printf()

	print "--------------------------------------------"
	print ""

def fetch(city):
	proxies = HTTP_PROXY
	url     = CITY_URLS[city]
	
	handle  = urllib.urlopen(url, proxies=proxies)
	
	return handle.read()	

def pie(city):
	name = "%s.db" % city
	store = Storage(name)
	
	parser = MyHTMLParser(store)
	
	html = fetch(city)
	parser.feed(html)
	
	weathers = store.read()
	printf(city, weathers)
	
if __name__ == "__main__":
	pie("Hangzhou")
	pie("Ningbo")

