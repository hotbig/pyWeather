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

class HalfDayWeather():
	def __init__(self, weather=None, temprature=None):
		self.weather    = weather  
		self.temprature = temprature

class DayWeather():
	def __init__(self, daytime=None, nighttime=None):
		self.daytime   = daytime   # daytime weather
		self.nighttime = nighttime # nighttime weather

class Weather():
	def __init__(self, date=None, time=None, weather=None, temp=None):
		self.date    = date
		self.time    = time
		self.weather = weather
		self.temp    = temp
	
	def printf(self):
		print self.date, self.time, self.weather, self.temp