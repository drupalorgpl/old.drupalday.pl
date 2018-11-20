Drupal.locale = { 'pluralFormula': function ($n) { return Number((($n==1)?(0):((((($n%10)>=2)&&(($n%10)<=4))&&((($n%100)<10)||(($n%100)>=20)))?(1):2))); }, 'strings': {"":{"An AJAX HTTP error occurred.":"Wyst\u0105pi\u0142 b\u0142\u0105d w AJAX HTTP.","HTTP Result Code: !status":"B\u0142\u0105d HTTP: !status","An AJAX HTTP request terminated abnormally.":"Zapytanie AJAX HTTP zosta\u0142o przerwane.","Debugging information follows.":"Informacje diagnostyczne.","Path: !uri":"\u015acie\u017cka: !uri","StatusText: !statusText":"StatusText: !statusText","ResponseText: !responseText":"ResponseText: !responseText","ReadyState: !readyState":"ReadyState: !readyState","Loading":"\u0141adowanie","(active tab)":"(aktywna karta)","Please wait...":"Prosz\u0119 czeka\u0107...","@title dialog":"@title dialog","Loading...":"Wczytuj\u0119...","Configure":"Konfiguruj","Hide":"Ukryj","Show":"Poka\u017c","Available tokens":"Dost\u0119pne \u017cetony","Insert this token into your form":"Wstaw ten wzorzec do formularza","First click a text field to insert your tokens into.":"Najpierw kliknij w pole tekstowe, do kt\u00f3rego b\u0119d\u0105 wstawione wzorce.","All":"Wszystko","Edit":"Edytuj","Add":"Dodaj","Done":"Gotowe","New":"Nowy","Next":"Nast\u0119pne","Sunday":"niedziela","Monday":"poniedzia\u0142ek","Tuesday":"wtorek","Wednesday":"\u015broda","Thursday":"czwartek","Friday":"pi\u0105tek","Saturday":"sobota","Upload":"Wysy\u0142anie plik\u00f3w","Prev":"Poprzedni","Mon":"pon.","Tue":"wt.","Wed":"\u015br.","Thu":"czw.","Fri":"pt.","Sat":"sob.","Sun":"ndz.","January":"stycze\u0144","February":"luty","March":"marzec","April":"kwiecie\u0144","May":"maj","June":"czerwiec","July":"lipiec","August":"Sierpie\u0144","September":"Wrzesie\u0144","October":"Pa\u017adziernik","November":"Listopad","December":"Grudzie\u0144","Select all rows in this table":"Zaznacza wszystkie wiersze tabeli","Deselect all rows in this table":"Cofa zaznaczenie wszystkich wierszy tabeli","Today":"Dzisiaj","Jan":"st.","Feb":"lt.","Mar":"mrz.","Apr":"kw.","Jun":"cz.","Jul":"lp.","Aug":"sie.","Sep":"wrz.","Oct":"pa\u017a.","Nov":"li.","Dec":"gru.","Su":"Ni","Mo":"Po","Tu":"Wt","We":"\u015ar","Th":"Cz","Fr":"Pi","Sa":"So","Not published":"Nie do publikacji","mm\/dd\/yy":"dd.mm.yy","Only files with the following extensions are allowed: %files-allowed.":"Dozwolone s\u0105 jedynie pliki o nast\u0119puj\u0105cych rozszerzeniach: %files-allowed.","Not in book":"Brak w ksi\u0105\u017cce","New book":"Nowa ksi\u0105\u017cka","By @name on @date":"Przez @name w @date","By @name":"Przez @name","Not in menu":"Nie ma w menu","Alias: @alias":"Alias: @alias","No alias":"Brak aliasu","New revision":"Nowa wersja","Drag to re-order":"Chwy\u0107, by zmieni\u0107 kolejno\u015b\u0107","Changes made in this table will not be saved until the form is submitted.":"Zmiany wprowadzone w tabeli zachowuje si\u0119 przyciskiem u do\u0142u formularza.","The changes to these blocks will not be saved until the \u003Cem\u003ESave blocks\u003C\/em\u003E button is clicked.":"Zmiany wprowadzone w blokach zachowuje si\u0119 przyciskiem u do\u0142u formularza.","No revision":"Brak wersji","@number comments per page":"@number komentarzy na stronie","Requires a title":"Tytu\u0142 wymagany","Not restricted":"Bez ogranicze\u0144","Not customizable":"Niekonfigurowalne","Restricted to certain pages":"Ograniczenie do okre\u015blonych stron.","The block cannot be placed in this region.":"Blok nie mo\u017ce by\u0107 umieszczony w tym obszarze.","Hide summary":"Ukryj podsumowanie","Edit summary":"Edycja podsumowania","Don\u0027t display post information":"Ukrycie informacji o wpisie","The selected file %filename cannot be uploaded. Only files with the following extensions are allowed: %extensions.":"Wybrany plik %filename nie m\u00f3g\u0142 zosta\u0107 wys\u0142any. Dozwolone s\u0105 jedynie nast\u0119puj\u0105ce rozszerzenia: %extensions.","Re-order rows by numerical weight instead of dragging.":"Zmie\u0144 kolejno\u015b\u0107 wierszy podaj\u0105c warto\u015bci numeryczne zamiast przeci\u0105gaj\u0105c.","Show row weights":"Poka\u017c wagi wierszy","Hide row weights":"Ukryj wagi wierszy","Autocomplete popup":"Okienko autouzupe\u0142niania","Searching for matches...":"Wyszukiwanie pasuj\u0105cych...","No flags":"Brak flag","Automatic alias":"Alias automatyczny","Select all":"Zaznacz wszystko","Remove group":"Usu\u0144 grup\u0119","Apply (all displays)":"Zastosuj (wszystkie formaty)","Apply (this display)":"Zastosuj (ten format)","Close":"Zamknij","Log messages":"Loguj wiadomo\u015bci","Please select a file.":"Prosz\u0119 wybra\u0107 plik.","You are not allowed to operate on more than %num files.":"Nie s\u0105 dozwolone czynno\u015bci na wi\u0119cej ni\u017c %num plikach.","Please specify dimensions within the allowed range that is from 1x1 to @dimensions.":"Okre\u015bl wymiary w dopuszczalnym zakresie od 1x1 do @dimensions.","%filename is not an image.":"%filename nie jest obrazkiem.","File browsing is disabled in directory %dir.":"Przegl\u0105danie plik\u00f3w jest wy\u0142\u0105czone dla katalogu %dir.","Do you want to refresh the current directory?":"Czy chcesz od\u015bwie\u017cy\u0107 zawarto\u015b\u0107 bie\u017c\u0105cego katalogu?","Delete selected files?":"Usun\u0105\u0107 wybrane pliki?","Please select a thumbnail.":"Wybierz miniaturk\u0119.","You must select at least %num files.":"Musisz wybra\u0107 co najmniej %num plik\u00f3w.","You can not perform this operation.":"Nie mo\u017cesz wykona\u0107 tej operacji.","Insert file":"Wstaw plik","Change view":"Zmie\u0144 widok","Directory":"Katalog","%dirname is not a valid directory name. It should contain only alphanumeric characters, hyphen and underscore.":"%dirname nie jest poprawn\u0105 nazw\u0105 katalogu. Nazwa powinna zawiera\u0107 tylko znaki alfanumeryczne, my\u015blnik oraz podkre\u015blenie.","Subdirectory %dir already exists.":"Podkatalog %dir ju\u017c istnieje.","Subdirectory %dir does not exist.":"Podkatalog %dir nie istnieje.","You are not alllowed to create more than %num directories.":"Nie masz pozwolenia na tworzenie wi\u0119cej ni\u017c %num katalog\u00f3w.","Are you sure want to delete this subdirectory with all directories and files in it?":"Czy jeste\u015b pewien, \u017ce chcesz skasowa\u0107 ten podkatalog wraz ze wszystkimi katalogami oraz ich zawarto\u015bci\u0105?"}} };;
(function ($) {

  Drupal.behaviors.captcha = {
    attach: function (context) {

      // Turn off autocompletion for the CAPTCHA response field.
      // We do it here with Javascript (instead of directly in the markup)
      // because this autocomplete attribute is not standard and
      // it would break (X)HTML compliance.
      $("#edit-captcha-response").attr("autocomplete", "off");

    }
  };

  Drupal.behaviors.captchaAdmin = {
    attach: function (context) {
    	// Add onclick handler to checkbox for adding a CAPTCHA description
    	// so that the textfields for the CAPTCHA description are hidden
    	// when no description should be added.
      // @todo: div.form-item-captcha-description depends on theming, maybe
      // it's better to add our own wrapper with id (instead of a class).
    	$("#edit-captcha-add-captcha-description").click(function() {
    		if ($("#edit-captcha-add-captcha-description").is(":checked")) {
    			// Show the CAPTCHA description textfield(s).
    			$("div.form-item-captcha-description").show('slow');
    		}
    		else {
    			// Hide the CAPTCHA description textfield(s).
    			$("div.form-item-captcha-description").hide('slow');
    		}
    	});
    	// Hide the CAPTCHA description textfields if option is disabled on page load.
    	if (!$("#edit-captcha-add-captcha-description").is(":checked")) {
    		$("div.form-item-captcha-description").hide();
    	}
    }

  };

})(jQuery);
;
(function ($) {

/**
 * Attach handlers to evaluate the strength of any password fields and to check
 * that its confirmation is correct.
 */
Drupal.behaviors.password = {
  attach: function (context, settings) {
    var translate = settings.password;
    $('input.password-field', context).once('password', function () {
      var passwordInput = $(this);
      var innerWrapper = $(this).parent();
      var outerWrapper = $(this).parent().parent();

      // Add identifying class to password element parent.
      innerWrapper.addClass('password-parent');

      // Add the password confirmation layer.
      $('input.password-confirm', outerWrapper).parent().prepend('<div class="password-confirm">' + translate['confirmTitle'] + ' <span></span></div>').addClass('confirm-parent');
      var confirmInput = $('input.password-confirm', outerWrapper);
      var confirmResult = $('div.password-confirm', outerWrapper);
      var confirmChild = $('span', confirmResult);

      // Add the description box.
      var passwordMeter = '<div class="password-strength"><div class="password-strength-text" aria-live="assertive"></div><div class="password-strength-title">' + translate['strengthTitle'] + '</div><div class="password-indicator"><div class="indicator"></div></div></div>';
      $(confirmInput).parent().after('<div class="password-suggestions description"></div>');
      $(innerWrapper).prepend(passwordMeter);
      var passwordDescription = $('div.password-suggestions', outerWrapper).hide();

      // Check the password strength.
      var passwordCheck = function () {

        // Evaluate the password strength.
        var result = Drupal.evaluatePasswordStrength(passwordInput.val(), settings.password);

        // Update the suggestions for how to improve the password.
        if (passwordDescription.html() != result.message) {
          passwordDescription.html(result.message);
        }

        // Only show the description box if there is a weakness in the password.
        if (result.strength == 100) {
          passwordDescription.hide();
        }
        else {
          passwordDescription.show();
        }

        // Adjust the length of the strength indicator.
        $(innerWrapper).find('.indicator').css('width', result.strength + '%');

        // Update the strength indication text.
        $(innerWrapper).find('.password-strength-text').html(result.indicatorText);

        passwordCheckMatch();
      };

      // Check that password and confirmation inputs match.
      var passwordCheckMatch = function () {

        if (confirmInput.val()) {
          var success = passwordInput.val() === confirmInput.val();

          // Show the confirm result.
          confirmResult.css({ visibility: 'visible' });

          // Remove the previous styling if any exists.
          if (this.confirmClass) {
            confirmChild.removeClass(this.confirmClass);
          }

          // Fill in the success message and set the class accordingly.
          var confirmClass = success ? 'ok' : 'error';
          confirmChild.html(translate['confirm' + (success ? 'Success' : 'Failure')]).addClass(confirmClass);
          this.confirmClass = confirmClass;
        }
        else {
          confirmResult.css({ visibility: 'hidden' });
        }
      };

      // Monitor keyup and blur events.
      // Blur must be used because a mouse paste does not trigger keyup.
      passwordInput.keyup(passwordCheck).focus(passwordCheck).blur(passwordCheck);
      confirmInput.keyup(passwordCheckMatch).blur(passwordCheckMatch);
    });
  }
};

/**
 * Evaluate the strength of a user's password.
 *
 * Returns the estimated strength and the relevant output message.
 */
Drupal.evaluatePasswordStrength = function (password, translate) {
  password = $.trim(password);

  var weaknesses = 0, strength = 100, msg = [];

  var hasLowercase = /[a-z]+/.test(password);
  var hasUppercase = /[A-Z]+/.test(password);
  var hasNumbers = /[0-9]+/.test(password);
  var hasPunctuation = /[^a-zA-Z0-9]+/.test(password);

  // If there is a username edit box on the page, compare password to that, otherwise
  // use value from the database.
  var usernameBox = $('input.username');
  var username = (usernameBox.length > 0) ? usernameBox.val() : translate.username;

  // Lose 5 points for every character less than 6, plus a 30 point penalty.
  if (password.length < 6) {
    msg.push(translate.tooShort);
    strength -= ((6 - password.length) * 5) + 30;
  }

  // Count weaknesses.
  if (!hasLowercase) {
    msg.push(translate.addLowerCase);
    weaknesses++;
  }
  if (!hasUppercase) {
    msg.push(translate.addUpperCase);
    weaknesses++;
  }
  if (!hasNumbers) {
    msg.push(translate.addNumbers);
    weaknesses++;
  }
  if (!hasPunctuation) {
    msg.push(translate.addPunctuation);
    weaknesses++;
  }

  // Apply penalty for each weakness (balanced against length penalty).
  switch (weaknesses) {
    case 1:
      strength -= 12.5;
      break;

    case 2:
      strength -= 25;
      break;

    case 3:
      strength -= 40;
      break;

    case 4:
      strength -= 40;
      break;
  }

  // Check if password is the same as the username.
  if (password !== '' && password.toLowerCase() === username.toLowerCase()) {
    msg.push(translate.sameAsUsername);
    // Passwords the same as username are always very weak.
    strength = 5;
  }

  // Based on the strength, work out what text should be shown by the password strength meter.
  if (strength < 60) {
    indicatorText = translate.weak;
  } else if (strength < 70) {
    indicatorText = translate.fair;
  } else if (strength < 80) {
    indicatorText = translate.good;
  } else if (strength <= 100) {
    indicatorText = translate.strong;
  }

  // Assemble the final message.
  msg = translate.hasWeaknesses + '<ul><li>' + msg.join('</li><li>') + '</li></ul>';
  return { strength: strength, message: msg, indicatorText: indicatorText };

};

/**
 * Field instance settings screen: force the 'Display on registration form'
 * checkbox checked whenever 'Required' is checked.
 */
Drupal.behaviors.fieldUserRegistration = {
  attach: function (context, settings) {
    var $checkbox = $('form#field-ui-field-edit-form input#edit-instance-settings-user-register-form');

    if ($checkbox.length) {
      $('input#edit-instance-required', context).once('user-register-form-checkbox', function () {
        $(this).bind('change', function (e) {
          if ($(this).attr('checked')) {
            $checkbox.attr('checked', true);
          }
        });
      });

    }
  }
};

})(jQuery);
;
