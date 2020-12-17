$('.dropdown-menu').click(function(e) {
    e.stopPropagation();
});

$('[data-toggle=tooltip]').tooltip();

$('.mdc-date-picker').datepicker({
    format: 'mm/dd/yyyy', keyboardNavigation: true
});

$(function(){
    $('.multi_select').fSelect();
});

  





// multi select
// multi select
$('.multiple .fs-checkbox').addClass('mdc-surface-ripple'); //adding mdc-ripple effect to fs-select
$("label.select-label.js-select-label").keyup(function(e){
  if(e.keyCode = 13){
    e.preventDefault()
    toggleMultiSelect(e)
  }
 
})
$(".js-select-menu").on("click", function() {

  
    var $menu = $(this);
    var $menuState = $menu.find(".js-menu-state");

    
    if($menuState.is(":checked")) {
      $(this).find("label.select-label.js-select-label").addClass("mdc-multiselect-outline")
      $(this).find(".menu").show()
      /// add aria here
      $(this).prev("input[type='checkbox']").attr("checked", true)
      $(document).one("mouseup", function(e) {
        if (!$menu.is(e.target)
          && $menu.has(e.target).length === 0) {
            $menuState.prop("checked", "");
          }
      });
    }else{
      $(this).find("label.select-label.js-select-label").removeClass("mdc-multiselect-outline")
      $(this).prev("input[type='checkbox']").attr("checked", false)
      $(".select-label").removeClass("mdc-multiselect-outline")
      // aria here
    }
});
  
  $(".js-option").on("change", function() {
    var $optionMenu = $(this).closest(".js-select-options");
    var $checkedList = $optionMenu.find(".js-option:checked ~ span");
    var $label =  $optionMenu.prev(".js-select-label");
    var $secondLabel = $optionMenu.prev(".js-select-label").find(".select-menu-value");
    
    if(!$(".js-check-all").is(":checked") &&
       $checkedList.length === $(".js-option").length) {
      $(".js-check-all").prop("checked", true);  
    }
    
    if($(".js-check-all").is(":checked") &&
       $checkedList.length !== $(".js-option").length) {
      $(".js-check-all").prop("checked", false);  
    }
    
    if(!$checkedList.length) {
      // $label.attr("data-label", $label.data("defaultLabel"))
      $secondLabel.attr("data-label", "")
      $label.removeClass("floatlabelAbove")
      return;
    }else{
      $label.addClass("floatlabelAbove")
    }
    
    var text = "";
    $checkedList.each(function(index) {
      text += $(this).text();
      if(index + 1 !== $checkedList.length) {
        text += ", "
      }
    });
  
    // $label.attr("data-label", text)
    $secondLabel.attr("data-label", text)
  });
  
  $(".js-check-all").on("change", function() {
    var $toggle = $(this);
    var checked = $toggle.is(":checked") ? true : false;
  
    $toggle.closest(".js-select-options").find(".js-option").each(function() {
      $(this).prop("checked", checked).change();
    });

    
  });
  
  $.fn.selectMenuValue = function() {
    var $checked = this.find('.js-select-options .js-option:checked');
    if($checked.length) {
      return [];
    }
    
    var valueArray = []; 
    $checked.each(function() {
      valueArray.push($(this).val());
    });
  
    return valueArray;
  }
  
  
  // filter js
  $(".js-filter-input").on("keyup", function() {
    var userSuppliedCriteria = $.trim($(this).val()).toLowerCase().split(" ");
    $(".js-filterable").each(function () {
      var $filterableElement = $(this);
      if ($filterableElement.shouldBeExcluded(userSuppliedCriteria)) {
        $filterableElement.hide();
      } else {
        $filterableElement.show();
      }
    });
  });
  
  $.fn.shouldBeExcluded = function (userSuppliedCriteria) {
    var elementCriteria = this.data("filterCriteria").toLowerCase();
    return userSuppliedCriteria.some(function (word) {
      return elementCriteria.indexOf(word) === -1;
    });
  };
   



  //  Additonal Mulit Select Function 

  $(document).on('click', '.js-select-menu input[type="checkbox"][data-group]', function(event) {
    // The checkbox that was clicked
    var actor = $(this);
    // The status of that checkbox
    var checked = actor.prop('checked');
    // The group that checkbox is in
    var group = actor.data('group');
    // All checkboxes of that group
    var checkboxes = $('input[type="checkbox"][data-group="' + group + '"]');
    // All checkboxes excluding the one that was clicked
    var otherCheckboxes = checkboxes.not(actor);
    // Check those checkboxes
    otherCheckboxes.prop('checked', checked);




   


  });


  function toggleMultiSelect(){
    var $menu = $(this);
    var $menuState = $menu.find(".js-menu-state");

    
    if($menuState.is(":checked")) {
      $(this).find("label.select-label.js-select-label").addClass("mdc-multiselect-outline")
      $(document).one("mouseup", function(e) {
        if (!$menu.is(e.target)
          && $menu.has(e.target).length === 0) {
            $menuState.prop("checked", "");
          }
      });
    }else{
      $(this).find("label.select-label.js-select-label").removeClass("mdc-multiselect-outline")
    }
  }





$(".select-menu .select-label, .select-menu input[type='button']").keydown(function(e){

  let MulitSelectToggle =  $(this).prev("input[type='button']");
  if(e.keyCode == 32 || e.keyCode == 13){
    e.preventDefault()
    e.stopPropagation()

    if($(this).hasClass("mdc-multiselect-outline") === true){
      $(MulitSelectToggle).prop("expanded", false).change()
      $(".mdc-multiselect-outline").removeClass("mdc-multiselect-outline")
      $(MulitSelectToggle).attr("aria-expanded", false)
    }else{
      $(MulitSelectToggle).prop("expanded", true).change()
      $(this).addClass("mdc-multiselect-outline")
      $(MulitSelectToggle).attr("aria-expanded", true)

      // aria-expanded="false"
    
      $(this).next(".menu").find(".js-filter-input").focus()
    }

  
  }

  if(e.keyCode == 27){
    $(MulitSelectToggle).prop("expanded", false).change()
    $(".mdc-multiselect-outline").removeClass("mdc-multiselect-outline")
    $(".mdc-multiselect-outline").focus()
  }

})   

$("body").keydown(function(e){
  if(e.keyCode == 27){
    $(".mdc-multiselect-outline").prev(".select-menu .menu-state").prop("expanded", false).change()
    $(".mdc-multiselect-outline").focus()
    $(".mdc-multiselect-outline").removeClass("mdc-multiselect-outline")
    $(".menu").hide()

}
})




$(".select-label").click(function(){
    $(this).addClass("mdc-multiselect-outline")
})

$("body").click(function(){
  if($(".menu:hover") === true){

  }else{
    $(".mdc-multiselect-outline").prev(".select-menu .menu-state").prop("expanded", false).change()
  }
})

$(document).mouseup(function(e) 
{
    var container = $(".menu");

    // if the target of the click isn't the container nor a descendant of the container
    if (!container.is(e.target) && container.has(e.target).length === 0) 
    {
        // container.hide();
        $(".select-label").removeClass("mdc-multiselect-outline")
    }
});

$( ".menu-state" ).focus(function() {
      $(this).next(".select-label").addClass("mdc-multiselect-outline")
});

$(".menu-state").focusout(function(){
  $(this).next(".select-label").removeClass("mdc-multiselect-outline")
})
 