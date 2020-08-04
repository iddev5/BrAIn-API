const express = require('express');
const app = module.exports = express();

class UnitConversion {
    constructor(unitTo, unitFrom, valTo, valFrom) {
      const units = {
        "temperature": ["K", "C", "F", "Ra", "Re"],
        "mass": ["Kg", "Hg", "Dag", "g", "Dg", "Cg", "Mg", "lb", "oz", "St"],
        "speed": ["m/s", "km/h", "mph", "knot", "ft/s"],
        "length": ["fm", "Å", "in", "mil", "ft", "yd", "mi", "RE", "AU", "ly", "pc", "km", "hm", "dam", "m", "dm", "cm", "mm"],
        "money": ["USD", "EUR", "JPY", "GBP", "AUD", "CAD", "CHF", "CNY", "HKD", "NZD", "SEK", "KRW", "SGD", "NOK", "MXN", "INR", "RUB", "ZAR", "TRY", "BRL", "TWD", "DKK", "PLN", "THB", "IDR", "HUF", "CZK", "ILS", "CLP", "PHP", "AED", "COP", "SAR", "MYR", "RON"],
        "time": ["millisecond", "second", "minute", "hour", "day", "week", "month", "year", "century", "decade", "millennium", "kiloyear", "era"],
        "electrical currency": ["c/s", "A"],
        "force": ["dyn", "sn", "tf", "lbf", "pdl", "kip", "kgf", "N"],
        "pressure": ["Pa", "kPa", "MPa", "psi", "torr", "atm", "bar"],
        "energy": ["J", "W", "kWh", "kW", "cal", "BTU", "Quad", "therm", "hp", "Mcf"],
        "volume": ["m³", "dm³", "cm³", "l", "dl", "cl", "ml", "fl oz", "in³", "ft³", "yd³", "gal", "bbl", "pt"],
        "area": ["km²", "m²", "dm²", "cm²", "mm²", "ha", "a", "ca", "mile²", "in²", "yd²", "ft²", "ro", "acre", "nautical mile²"],
        "density": ["kg/L", "kg/m³", "g/mL", "t/m³", "kg/dm³", "g/cm³", "Mg/m³", "oz/cu in", "lb/cu in", "lb/cu ft", "lb/cu yd", "lb/gal", "lb/bu", "lb/pt"],
        "timezones": ["UTC", "GMT", "PST", "MST", "CST", "EST", "PDT", "MDT", "CDT", "EDT"]
      }
      //TODO: Convert everything to the SI and to the desired output
      //TODO: Read everything from #units.json
      //TODO: Make a Python bot to write every conversion?
      //TODO: Use hjson instead of json?
      this.unitTo = unitTo;
      this.unitFrom = unitFrom,
      this.valTo = valTo;
      this.valFrom = valFrom;

      const conversionTable = units.find()
    }
}