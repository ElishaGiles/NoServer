angular.module('noServer').service('conversionService', function() {

this.outerConversion = function(num, typeFrom, typeTo) {
		var conversionFactor;
    switch(typeFrom) {

			case 'teaspoon':
				if(typeTo === 'tablespoon') conversionFactor = 0.333333;
				else if(typeTo === 'cup') conversionFactor = 0.0205372;
				else if(typeTo === 'fluid ounce') conversionFactor = 0.166667;
				else if(typeTo === 'pint') conversionFactor = 0.0104167;
        else if(typeTo === 'quart') conversionFactor = 0.00520833;
        else if(typeTo === 'gallon') conversionFactor = 0.00130208; break;

			case 'tablespoon':
        if(typeTo === 'teaspoon') conversionFactor = 3;
        else if(typeTo === 'cup') conversionFactor = 0.0625;
        else if(typeTo === 'fluid ounce') conversionFactor = 0.5;
        else if(typeTo === 'pint') conversionFactor = 0.03125;
        else if(typeTo === 'quart') conversionFactor = 0.015625;
        else if(typeTo === 'gallon') conversionFactor = 0.00390625; break;

      case 'cup':
        if(typeTo === 'teaspoon') conversionFactor = 48.6922;
        else if(typeTo === 'tablespoon') conversionFactor = 16.2307;
        else if(typeTo === 'fluid ounce') conversionFactor = 8.11537;
        else if(typeTo === 'pint') conversionFactor = 0.50721;
        else if(typeTo === 'quart') conversionFactor = 0.253605;
        else if(typeTo === 'gallon') conversionFactor = 0.0634013; break;

      case 'fluid ounce':
        if(typeTo === 'teaspoon') conversionFactor = 6;
        else if(typeTo === 'tablespoon') conversionFactor = 2;
        else if(typeTo === 'cup') conversionFactor = 0.123223;
        else if(typeTo === 'pint') conversionFactor = 0.0625;
        else if(typeTo === 'quart') conversionFactor = 0.03125;
        else if(typeTo === 'gallon') conversionFactor = 0.0078125; break;

      case 'pint':
        if(typeTo === 'teaspoon') conversionFactor = 96;
        else if(typeTo === 'tablespoon') conversionFactor = 32;
        else if(typeTo === 'cup') conversionFactor = 1.97157;
        else if(typeTo === 'fluid ounce') conversionFactor = 16;
        else if(typeTo === 'quart') conversionFactor = 0.5;
        else if(typeTo === 'gallon') conversionFactor = 0.125; break;

      case 'quart':
        if(typeTo === 'teaspoon') conversionFactor = 192;
        else if(typeTo === 'tablespoon') conversionFactor = 64;
        else if(typeTo === 'cup') conversionFactor = 3.94314;
        else if(typeTo === 'fluid ounce') conversionFactor = 32;
        else if(typeTo === 'pint') conversionFactor = 2;
        else if(typeTo === 'gallon') conversionFactor = 0.25; break;

      case 'gallon':
        if(typeTo === 'teaspoon') conversionFactor = 768;
        else if(typeTo === 'tablespoon') conversionFactor = 256;
        else if(typeTo === 'cup') conversionFactor = 15.7725;
        else if(typeTo === 'fluid ounce') conversionFactor = 128;
        else if(typeTo === 'pint') conversionFactor = 15.7725;
        else if(typeTo === 'quart') conversionFactor = 4; break;

	//Distance Conversions

			case 'inch':
				if(typeTo === 'feet') conversionFactor = .0833333;
				else if(typeTo === 'yard') conversionFactor = 0.0277778;
				else if(typeTo === 'mile') conversionFactor = 0.00001578;
				else if(typeTo === 'millimeter') conversionFactor = 25.4;
				else if(typeTo === 'centimeter') conversionFactor = 0.0254;
				else if(typeTo === 'meter') conversionFactor = 0.0254;
				else if(typeTo === 'kilometer') conversionFactor = 0.0000254; break;

			case 'feet':
				if(typeTo === 'inch') conversionFactor = 12;
				else if(typeTo === 'yard') conversionFactor = 0.333333;
				else if(typeTo === 'mile') conversionFactor = 0.000189394;
				else if(typeTo === 'millimeter') conversionFactor = 304.8;
				else if(typeTo === 'centimeter') conversionFactor = 30.48;
				else if(typeTo === 'meter') conversionFactor = 0.3048;
				else if(typeTo === 'kilometer') conversionFactor = 0.0003048; break;

			case 'yard':
				if(typeTo === 'inch') conversionFactor = 36;
				else if(typeTo === 'feet') conversionFactor = 3;
				else if(typeTo === 'mile') conversionFactor = .000568182;
				else if(typeTo === 'millimeter') conversionFactor = 914.4;
				else if(typeTo === 'centimeter') conversionFactor = 91.44;
				else if(typeTo === 'meter') conversionFactor = .9144;
				else if(typeTo === 'kilometer') conversionFactor = 0.0009144; break;

			case 'mile':
				if(typeTo === 'inch') conversionFactor = 63360;
				else if(typeTo === 'feet') conversionFactor = 5280;
				else if(typeTo === 'yard') conversionFactor = 1760;
				else if(typeTo === 'millimeter') conversionFactor = 1609000;
				else if(typeTo === 'centimeter') conversionFactor = 160934;
				else if(typeTo === 'meter') conversionFactor = 1609.34;
				else if(typeTo === 'kilometer') conversionFactor = 1.60934; break;

			case 'millimeter':
				if(typeTo === 'inch') conversionFactor = 0.0393701;
				else if(typeTo === 'feet') conversionFactor = 0.00328084;
				else if(typeTo === 'yard') conversionFactor = 0.00109361;
				else if(typeTo === 'mile') conversionFactor = 0.00000062137;
				else if(typeTo === 'centimeter') conversionFactor = 0.1;
				else if(typeTo === 'meter') conversionFactor = 0.001;
				else if(typeTo === 'kilometer') conversionFactor = 0.000006; break;

			case 'centimeter':
				if(typeTo === 'inch') conversionFactor = 0.393701;
				else if(typeTo === 'feet') conversionFactor = 0.0328084;
				else if(typeTo === 'yard') conversionFactor = 0.0109361;
				else if(typeTo === 'mile') conversionFactor = 0.0000062137;
				else if(typeTo === 'millimeter') conversionFactor = 10;
				else if(typeTo === 'meter') conversionFactor = 0.01;
				else if(typeTo === 'kilometer') conversionFactor = 0.00001; break;

			case 'meter':
				if(typeTo === 'inch') conversionFactor = 39.3701;
				else if(typeTo === 'feet') conversionFactor = 3.28084;
				else if(typeTo === 'yard') conversionFactor = 1.09361;
				else if(typeTo === 'mile') conversionFactor = 0.000621371;
				else if(typeTo === 'millimeter') conversionFactor = 1000;
				else if(typeTo === 'centimeter') conversionFactor = 100;
				else if(typeTo === 'kilometer') conversionFactor = 0.001; break;

			case 'kilometer':
				if(typeTo === 'inch') conversionFactor = 39370.1;
				else if(typeTo === 'feet') conversionFactor = 3280.84;
				else if(typeTo === 'yard') conversionFactor = 1093.61;
				else if(typeTo === 'mile') conversionFactor = 0.621371;
				else if(typeTo === 'millimeter') conversionFactor = 1000000;
				else if(typeTo === 'centimeter') conversionFactor = 100000;
				else if(typeTo === 'meter') conversionFactor = 1000; break;

		//Science Conversions

			case 'ounce':
				if(typeTo === 'pound') conversionFactor = .0625;
				else if(typeTo === 'stone') conversionFactor = .00446429;
				else if(typeTo === 'gram') conversionFactor = 28.3495;
				else if(typeTo === 'kilogram') conversionFactor = .0283495; break;

			case 'pound':
				if(typeTo === 'ounce') conversionFactor = 16;
				else if(typeTo === 'stone') conversionFactor = 0.0714286;
				else if(typeTo === 'gram') conversionFactor = 453.592;
				else if(typeTo === 'kilogram') conversionFactor = 0.453592; break;

			case 'stone':
				if(typeTo === 'ounce') conversionFactor = 224;
				else if(typeTo === 'pound') conversionFactor = 14;
				else if(typeTo === 'gram') conversionFactor = 6350.29;
				else if(typeTo === 'kilogram') conversionFactor = 6.35029; break;

			case 'gram':
				if(typeTo === 'ounce') conversionFactor = 0.035274;
				else if(typeTo === 'pound') conversionFactor = 0.00220462;
				else if(typeTo === 'stone') conversionFactor = 0.000157473;
				else if(typeTo === 'kilogram') conversionFactor = 0.001; break;

			case 'kilogram':
				if(typeTo === 'ounce') conversionFactor = 35.274;
				else if(typeTo === 'pound') conversionFactor = 2.20462;
				else if(typeTo === 'stone') conversionFactor = 0.157473;
				else if(typeTo === 'gram') conversionFactor = 1000; break;

		//Currency Conversions

			case 'penny':
				if(typeTo === 'nickel') conversionFactor = 0.2;
				else if(typeTo === 'dime') conversionFactor = 0.1;
				else if(typeTo === 'quarter') conversionFactor = .04;
				else if(typeTo === 'halfDollar') conversionFactor = .02;
				else if(typeTo === 'dollar') conversionFactor = .01; break;

			case 'nickel':
				if(typeTo === 'penny') conversionFactor = 5;
				else if(typeTo === 'dime') conversionFactor = 0.5;
				else if(typeTo === 'quarter') conversionFactor = .2;
				else if(typeTo === 'halfDollar') conversionFactor = .1;
				else if(typeTo === 'dollar') conversionFactor = .05; break;

			case 'dime':
				if(typeTo === 'penny') conversionFactor = 10;
				else if(typeTo === 'nickel') conversionFactor = 2;
				else if(typeTo === 'quarter') conversionFactor = .4;
				else if(typeTo === 'halfDollar') conversionFactor = .2;
				else if(typeTo === 'dollar') conversionFactor = .1; break;

			case 'quarter':
				if(typeTo === 'penny') conversionFactor = 25;
				else if(typeTo === 'nickel') conversionFactor = 5;
				else if(typeTo === 'dime') conversionFactor = 2.5;
				else if(typeTo === 'halfDollar') conversionFactor = .5;
				else if(typeTo === 'dollar') conversionFactor = .25; break;

			case 'halfDollar':
				if(typeTo === 'penny') conversionFactor = 50;
				else if(typeTo === 'nickel') conversionFactor = 10;
				else if(typeTo === 'dime') conversionFactor = 5;
				else if(typeTo === 'quarter') conversionFactor = 2;
				else if(typeTo === 'dollar') conversionFactor = .5; break;

			case 'dollar':
				if(typeTo === 'penny') conversionFactor = 100;
				else if(typeTo === 'nickel') conversionFactor = 20;
				else if(typeTo === 'dime') conversionFactor = 10;
				else if(typeTo === 'quarter') conversionFactor = 4;
				else if(typeTo === 'halfDollar') conversionFactor = 2; break;

		}
    return num * conversionFactor;
	}

})
