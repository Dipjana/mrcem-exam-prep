  /*
   *  FlagStrap - v3.3.5
   *  A lightwieght jQuery plugin for creating Bootstrap 3 compatible country select boxes with flags.
   *  http://www.blazeworx.com/flagstrap
   *
   *  Made by Alex Carter
   *  Under MIT License
   */
  (function ($) {

    var defaults = {
        buttonSize: "btn-md",
        buttonType: "btn-custom shadow-none text-light",
        labelMargin: "10px",
        scrollable: true,
        scrollableHeight: "250px",
        elementidname:'',
        currencies:'',
        currencysymbol: ''
    };
    
   
    $.flagStrap = function (element, options, i) {
    
        var plugin = this;
    
        var uniqueId = generateId(8);
   
        plugin.currencies = {};
        plugin.selected = {value: null, text: null};
        plugin.settings = {inputName: 'country-' + uniqueId};
    
        var $container = $(element);
        var htmlSelectId = 'flagstrap-' + uniqueId;
        var htmlSelect = '#' + htmlSelectId;
        var currencysymbol;
        plugin.init = function () {
    
            // Merge in global settings then merge in individual settings via data attributes
            // plugin.currencies = currencies;
    
            // Initialize Settings, priority: defaults, init options, data attributes
            // plugin.currencies = currencies;
            plugin.settings = $.extend({}, defaults, options, $container.data());
         
            if (undefined !== plugin.settings.currencies) {
                plugin.currencies = plugin.settings.currencies;
                currencysymbol = plugin.settings.currencysymbol;
            }
    
            // Build HTML Select, Construct the drop down button, Assemble the drop down list items element and insert
            $container
                .addClass('flagstrap')
                .append(buildHtmlSelect)
                .append(buildDropDownButton)
                .append(buildDropDownButtonItemList);
    
            // Hide the actual HTML select
            $(htmlSelect).hide();
    
        };
    
        var buildHtmlSelect = function () {
            var htmlSelectElement = $('<select/>').attr('id', htmlSelectId).attr('name', plugin.settings.inputName);
    
            $.each(plugin.currencies, function (code, country) {
                var optionAttributes = {value: code};
                if (plugin.settings.selectedCountry !== undefined) {
                    if (plugin.settings.selectedCountry === code) {
                        optionAttributes = {value: code, selected: "selected"};
                        plugin.selected = {value: code, text: country}
                    }
                }
                htmlSelectElement.append($('<option>', optionAttributes).text(country));
            });
    
            return htmlSelectElement;
        };
    
        var buildDropDownButton = function () {
    
            var selectedText = $(htmlSelect).find('option').first().text();
            var selectedValue = $(htmlSelect).find('option').first().val();
    
            selectedText = plugin.selected.text || selectedText;
            selectedValue = plugin.selected.value || selectedValue;
    
            // var $selectedLabel = $('<i/>').addClass('flagstrap-icon flagstrap-' + selectedValue.toLowerCase()).css('margin-right', plugin.settings.labelMargin);
            var $selectedLabel =$('<img />',
            { id: 'currency-' + selectedValue.toLowerCase(),
              class:'imgcurrency btn-hide-icon',  
              src: currencysymbol[`${selectedValue}`],
            })
    
            var buttonLabel = $('<span/>')
                .addClass('flagstrap-selected-' + uniqueId)
                .attr('data-'+plugin.settings.elementidname, selectedText)
                .html($selectedLabel)
                .append(selectedText);
    
            var button = $('<button/>')
                .attr('data-toggle', 'dropdown')
                .attr('id', 'flagstrap-drop-down-' + uniqueId)
                .attr('aria-expanded', 'false')
           
                .addClass('btn ' + plugin.settings.buttonType + ' ' + plugin.settings.buttonSize + ' dropdown-toggle')
                .html(buttonLabel)
                .on('click', function (e) {
                    // alert("button clicked");
                    $('#flagstrap-drop-down-' + uniqueId + '-list').toggleClass('show');
                });
    
            $('<span/>')
                .addClass('caret')
                .css('margin-left', plugin.settings.labelMargin)
                .insertAfter(buttonLabel);
    
            return button;
    
        };
    
        var buildDropDownButtonItemList = function () {
            var items = $('<ul/>')
                .attr('id', 'flagstrap-drop-down-' + uniqueId + '-list')
                .attr('class', 'currency-drop-down-list')
                .attr('aria-labelled-by', 'flagstrap-drop-down-' + uniqueId)
                .addClass('dropdown-menu');
    
            if (plugin.settings.scrollable) {
                items.css('height', 'auto')
                    .css('max-height', plugin.settings.scrollableHeight)
                    .css('overflow-x', 'hidden')
                    .css('min-width', '122px')
                    .css('width', '122px');
            }
    
            // Populate the bootstrap dropdown item list
            $(htmlSelect).find('option').each(function () {
    
                // Get original select option values and labels
                var text = '<span>'+ $(this).text() +'</span>';
                var value = $(this).val();
    
                // Build the flag icon
                // var flagIcon = $('<i/>').addClass('flagstrap-icon flagstrap-' + value.toLowerCase()).css('margin-right', plugin.settings.labelMargin);
                var flagIcon =$('<img />',
                { id: 'currency-' + value.toLowerCase(),
                  class: 'imgcurrency btn-hide-icon',
                  src: currencysymbol[`${value}`], 
                 
                })
                // Build a clickable drop down option item, insert the flag and label, attach click event
                var flagStrapItem = $('<a/>')
                    .attr('data-val', $(this).val())
                    .addClass("dropdown-item")
                    .html(flagIcon)
                    .append(text)
                    .on('click', function (e) {
                        
                        $(htmlSelect).find('option').removeAttr('selected');
                        $(htmlSelect).find('option[value="' + $(this).data('val') + '"]').attr("selected", "selected");
                        $('.flagstrap-selected-' + uniqueId).html($(this).html());
                        $('.flagstrap-selected-' + uniqueId).attr('data-'+plugin.settings.elementidname, $(this).data('val'));
                        e.preventDefault();
                        $('#flagstrap-drop-down-' + uniqueId + '-list').removeClass('show');
                    });
    
                // Make it a list item
                var listItem = $('<li/>').prepend(flagStrapItem);
    
                // Append it to the drop down item list
                items.append(listItem);
    
            });
            $(document).on('click', function(event){
                if (!$(event.target).next().hasClass('show')) {
                    $('#flagstrap-drop-down-' + uniqueId + '-list').removeClass('show');
                  }
                // $(event.target).next().removeClass('show');
            });
            return items;
        };
    
        function generateId(length) {
            var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz'.split('');
    
            if (!length) {
                length = Math.floor(Math.random() * chars.length);
            }
    
            var str = '';
            for (var i = 0; i < length; i++) {
                str += chars[Math.floor(Math.random() * chars.length)];
            }
            return str;
        }
    
        plugin.init();
    
    };
    
    $.fn.flagStrap = function (options) {
    
        return this.each(function (i) {
            if ($(this).data('flagStrap') === undefined) {
                $(this).data('flagStrap', new $.flagStrap(this, options, i));
            }
        });
     
    }
      // initialization

      var currencies1 = {
        "ETH": "ETH",
        "KCASH": "KCASH",
        "ZRX": "ZRX",
        "BAT": "BAT",
        "BTC": "BTC",
        "MT": "MT",
        "BHT": "BHT",
        "BTP": "BTP",
        "USDT": "USDT",
        "LTC": "LTC",
        "DASH": "DASH",
        "DOGE": "DOGE",
        "LINK": "LINK",
        "REP": "REP",
        "KNC@111": "KNC@111",
        "USDC": "USDC",
        "DAI": "DAI",
        "CRO": "CRO"    
        
    };
    var currencysymbol1 = {
        "ETH": "https://cdn.byte-trade.com/token/icon6/eth.png",
        "KCASH": "https://cdn.byte-trade.com/token/icon6/kcash.png",
        "ZRX": "https://cdn.byte-trade.com/token/icon6/zrx.png",
        "BAT": "https://cdn.byte-trade.com/token/icon6/bat.png",
        "BTC": "https://cdn.byte-trade.com/token/icon6/btc.png",
        "MT": "https://cdn.byte-trade.com/token/icon6/mt.png",
        "BHT": "https://cdn.byte-trade.com/token/icon6/bht.png",
        "BTP": "https://cdn.byte-trade.com/token/icon6/btp.png",
        "USDT": "https://cdn.byte-trade.com/token/icon6/usdt.png",
        "LTC": "https://cdn.byte-trade.com/token/icon6/ltc.png",
        "DASH": "https://cdn.byte-trade.com/token/icon6/dash.png",
        "DOGE": "https://cdn.byte-trade.com/token/icon6/doge.png",
        "LINK": "https://cdn.byte-trade.com/token/icon6/link.png",
        "REP": "https://cdn.byte-trade.com/token/icon6/rep.png",
        "KNC@111": "https://d3gb7ti6ep8l4y.cloudfront.net/token/icon6/default.png",
        "USDC": "https://cdn.byte-trade.com/token/icon6/usdc.png",
        "DAI": "https://cdn.byte-trade.com/token/icon6/dai.png",
        "CRO": "https://cdn.byte-trade.com/token/icon6/cro.png"    
        
    };
    var currencies2 = {
        "1776": "ETH",
        "CTEAM": "CTEAM"       
    };
    var currencysymbol2 = {
        "1776": "https://cdn.byte-trade.com/token/icon6/1776.png",
        "CTEAM": "https://cdn.byte-trade.com/token/icon6/cteam.png"        
    };
  if($('#trade_crypto1').length > 0) { $('#trade_crypto1').flagStrap({
    elementidname:'trade_crypto1',
    currencies:currencies1,
    currencysymbol: currencysymbol1
  });}
  if($('#trade_crypto2').length > 0) { $('#trade_crypto2').flagStrap({
    elementidname:'trade_crypto2',
    currencies:currencies2,
    currencysymbol: currencysymbol2
  });}
  if($('#trade_crypto3').length > 0) { $('#trade_crypto3').flagStrap({
    elementidname:'trade_crypto3',
    currencies:currencies1,
    currencysymbol: currencysymbol1
  });}
  if($('#trade_crypto4').length > 0) { $('#trade_crypto4').flagStrap({
    elementidname:'trade_crypto4',
    currencies:currencies1,
    currencysymbol: currencysymbol1
  });}

    })(jQuery);

    