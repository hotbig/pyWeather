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
import sys
sys.path.append("..")
from datetime import date, time, datetime, timedelta
from definition.weather import *

class Storage():
	def __init__(self, city):
		date = datetime.now().date()
		self.file = "store/%s_%s.db" % (date, city)
			
	def write(self, items):
		handle = open(self.file, 'w')
		
		for item in items:
			handle.write("%s " % item.date)
			handle.write("%s " % item.time)
			handle.write("%s " % item.weather)
			handle.write("%s " % item.temp)
			handle.write("\n")
		
		handle.close()
			
	def read(self):
		weathers = []
		
		handle = open(self.file, 'r')
		
		line = handle.readline()
		while(line):
			weather = Weather()
			tuple = line.split()
			
			weather.date = tuple[0]		
			weather.time = tuple[1]
			weather.weather = tuple[2]
			weather.temp = tuple[3]
			
			weathers.append(weather)
			line = handle.readline()
		
		handle.close()
		return weathers
