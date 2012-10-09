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
from weather import Weather

class Storage():
	def __init__(self, file):
		self.file = file
	
	def open(self):
		self.handle = open(self.file, 'w')
		
	def close(self):
		self.handle.close()
		
	def write(self, items):
		for item in items:
			self.handle.write("%s " % item.date)
			self.handle.write("%s " % item.time)
			self.handle.write("%s " % item.weather)
			self.handle.write("%s " % item.temp)
			self.handle.write("\n")
			
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
