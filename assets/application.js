// Put your application javascript here

// 1. JS for hero-slider section
var counter = 1;
setInterval(function(){
    // document.getElementById("radio" + counter).checked = true;
    var checkBox = document.getElementById("radio" + counter);
    if(checkBox != null) {
        checkBox.checked = true;
    }
    counter++;
    if(counter > 3){
        counter = 1;
    }
},5000);



$(document).ready(function(){

//collections page - TEST
var itemWrapper = $(".product-card__image-with-placeholder-wrapper .grid-view-item__image-wrapper div");
//console.log("item wrapper is ", itemWrapper);

itemWrapper.removeAttr('style');
itemWrapper.css("padding-top", "0%!important");



//2. JS for HEADER section

    $(".header-section .checkbtn").click(function(){
        $(this).siblings("nav.mobile-navigation").toggleClass("open-header");
    })

    var dropdownSVG = `<div><svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0.576053 1.08678C0.819754 0.852567 1.20111 0.831274 1.46983 1.02291L1.54682 1.08678L7.04718 6.37331L12.5475 1.08678C12.7912 0.852567 13.1726 0.831274 13.4413 1.02291L13.5183 1.08678C13.762 1.321 13.7842 1.68751 13.5848 1.94578L13.5183 2.01978L7.53257 7.77259C7.28886 8.0068 6.90751 8.0281 6.63878 7.83647L6.5618 7.77259L0.576053 2.01978C0.307982 1.76214 0.307982 1.34442 0.576053 1.08678Z" fill="black"/>
    </svg></div>`;

    //for child
    $(".header-section .parent li").hover(function(){
        //console.log($(this));
        if($(this).children(".child")){
            //console.log("it has a child", $(this).children(".child"));
            //$(this).children(".child").css("visibility", "visible");
            $(this).children(".child").addClass("dropdown");
        }
    });

    // if($(".header-section .parent li a").html().includes("shop")){
    //     console.log("yeyyyye")
    //     $(this).append(dropdownSVG);
    // }

    //for grandchild
    $(".header-section .child li").hover(function(){
        //console.log($(this));
        if($(this).children(".grandchild")){
           // console.log("it has a grandchildchild", $(this).children(".grandchild"));
            //$(this).children(".child").css("visibility", "visible");
            $(this).children(".grandchild").addClass("dropdown-2");
        }
    });




    //MOBILE SECTION
    //child
    $(".mobile-navigation .parent li span").click(function(){
        // $(this).parent("li").children(".child").toggleClass('display');
        $(this).siblings(".child").toggleClass('display');
        $(this).parent(".categories-dropdown").toggleClass('dropdown-display');
        $(this).children("svg").css("transform", "rotate(180deg)");

        //console.log("span be clicked");
     
    })


    // $(".mobile-navigation .child li span").click(function(){
    //     $(this).parent().children(".grandchild").toggleClass('display');
    //     console.log("span be clicked")
    //     //$('.dropdown-2').removeClass('display');
    // })

    // $(".header-section .child li").click(function(){
    //     $(this).children(".child").toggleClass('display');
    //     console.log("span be clicked")
    //     //$('.dropdown-2').removeClass('display');
    // })



//2.1 REVISED HEADER - SLIDER SECTION

//for first slider
$(document).on('click','.open-desktop-nav-slider',  (e) => openDesktopNav(e));

function openDesktopNav(e){
   e.preventDefault();
   //("desktop nav is open")
    
    $(".desktop-child-nav__slider").addClass("nav-slider--open");
    $(".desktop-child-nav__slider-overlay").css("display", "block");    
}

function closeDesktopNav(e){
    e.preventDefault();
    //console.log("desktop nav is closed")
    $(".desktop-child-nav__slider").removeClass("nav-slider--open");
    $(".desktop-child-nav__slider-overlay").css("display", "none");
    $(".close-desktop-nav-slider").css("left", "100%");
    $(".desktop-grandchild-nav__slider").removeClass("nav-slider-open-grandchild");
    $(".open-desktop-nav-slider__granchild a").css("color", "#000");
    $(".open-desktop-nav-slider__granchild svg path").css("fill", "#000");
}

$(document).on('click','.close-desktop-nav-slider',  (e) => closeDesktopNav(e));


//for second slider
$(document).on('click','.open-desktop-nav-slider__granchild',  (e) => openDesktopNavGC(e));

function openDesktopNavGC(e){
    e.preventDefault();
    //console.log("grandchild nav is open")
     
     $(".desktop-grandchild-nav__slider").addClass("nav-slider-open-grandchild");
     $(".close-desktop-nav-slider").css("left", "200%");
     $(".open-desktop-nav-slider__granchild a").css("color", "#B98876");
     $(".open-desktop-nav-slider__granchild svg path").css("fill", "#B98876");
}



//3. JS for PRODUCT-PAGE image slider
$('.main-images').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: false,
    asNavFor: '.thumb-images'
  });
  $('.thumb-images').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.main-images',
    dots: true,
    arrows: false,
    centerMode: true,
    centerPadding: "50px",
    focusOnSelect: true
  });

  var thumbLeftSVG = `<div><svg width="15" height="12" viewBox="0 0 15 12" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M1.54199 6.22843L14.042 6.22843" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M6.58301 11.2488L1.54134 6.22884L6.58301 1.20801" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
  </div>`;

var thumbRightSVG = `<div><svg width="15" height="12" viewBox="0 0 15 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.458 5.77157L0.958008 5.77157" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8.41699 0.751158L13.4587 5.77116L8.41699 10.792" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</div>`;


$(".thumb-images .slick-prev").html(thumbLeftSVG);
$(".thumb-images .slick-next").html(thumbRightSVG);

$(".main-images .slick-prev").html(thumbLeftSVG);
$(".main-images .slick-next").html(thumbRightSVG);


//3.1 JS for PRODUCT-PAGE image slider - mobile
$(".product-images-mobile").slick(
{
    infinite: true,
	dots: true,
	arrows: false,
	autoplay: false,
	autoplaySpeed: 0,
	fade: true,
	fadeSpeed: 0
}
);



/* =============== METAFIELD ===================*/

//accordian
// accordian
$(".accordian").click(function(){
    if($(this).hasClass('accordian-active')){
       $(this).removeClass("accordian-active"); 
    }
    else{
      $(".accordian").removeClass('accordian-active');
      $(this).addClass("accordian-active");  
    }
    
    // $(this).siblings().removeClass("accordian-active");
    
  
  });
  
  
  //tabs
  $("ul li.tab").click(function(){
    // console.log($(this));
    $(this).addClass("tab-active").siblings().removeClass("tab-active");
     $(".tab-container .tab-content").hide();
     //$(this).css("border-bottom","1px solid #111");
  
    $($(this).data("value")).fadeIn("slow");
  });
  
  /* =============== METAFIELD ===================*/
      


//4. PDP page COLOR Swatches
//first value should be checked

//  BUNDLES : first variant selected by default 
$(".variant-swatches.varaint-swatches-bundles").children(".variant-swatch-options").children("label.variant-color-swatch:first-of-type").children(".swatch-images").addClass("swatch-active");

//  PDP DESKTOP SWATCHES : first variant selected by default 
$(".variant-swatches.variant-swatches-desktop").children(".variant-swatch-options").children("label.variant-color-swatch:first-of-type").children(".swatch-images").addClass("swatch-active");

// MOBILE : first variant selected by default
$(".variant-swatches.variant-swatches-mobile").children(".variant-swatch-options").children("label.variant-color-swatch:first-of-type").children(".swatch-images").addClass("swatch-active");

$(document).on('click', '.variant-swatches .variant-color-swatch', function(){
    var currentVariantTitile = $(this).data("variant-title");
    var currentInventoryQty = $(this).data("inventory-qty");
    var currentVariantPrice = $(this).data("variant-price");
   // console.log("current variant is", currentVariantTitile, currentInventoryQty) ;

    //update the color swatch name
    $(".variant-swatches .color-swatch-name span").html(currentVariantTitile);
//     if(currentInventoryQty == 0){
//         $(".variant-swatches .color-swatch-name span").append(" - Sold Out"); 
//     }
    //console.log("current variant price is", currentVariantPrice)
    //update the product price according to the variant selected
    $(".prod-price").html(currentVariantPrice);

    //border around the swatches

    $(this).children(".swatch-images").addClass("swatch-active");
    //$(this).children(".custom-radio-btn").addClass("swatch-active");
    $(this).siblings(".variant-color-swatch").children(".swatch-images").removeClass("swatch-active");
   // console.log($(this).siblings(".variant-color-swatch").children("img.swatch-images"))
})

// $(".variant-swatches .variant-color-swatch").click(function(){
//     var currentVariantTitile = $(this).data("variant-title");
//     console.log("current variant is", currentVariantTitile) ;

//     //update the color swatch name
//     $(".variant-swatches .color-swatch-name span").html(currentVariantTitile);

//     //border around the swatches

//     $(this).children("img.swatch-images").addClass("swatch-active");
//     $(this).siblings(".variant-color-swatch").children("img.swatch-images").removeClass("swatch-active");
//     console.log($(this).siblings(".variant-color-swatch").children("img.swatch-images"))
// });



//5. PDP page mobile - SWATCH popup
var shadeOffset = 0;
if($('.pairs-well-with-mobile').length > 0){
    var offHeight = $('.pairs-well-with-mobile').offset().top;
}

$(document).on('click', '.swatch-popup-btn', function(e){
    e.stopPropagation();
    e.preventDefault();
   // shadeOffset = $(this).offset().top;
    // $(".variant-swatch-popup").addClass("popup-active");
    // $(".variant-swatch-popup-overlay").addClass("popup-active");
    $(this).siblings(".variant-swatch-popup").addClass("popup-active");
    $(this).siblings(".variant-swatch-popup-overlay").addClass("popup-active");
    // $('body,html').animate({
    //     scrollTop: offHeight + 200
    // },300);
})


$(document).on('click', '.swatch-popup-btn-close', function(e){
    e.stopPropagation();
    e.preventDefault();
   // console.log("variant swacth btn close clicked")
    // $(".variant-swatch-popup").removeClass("popup-active");
    // $(".variant-swatch-popup-overlay").removeClass("popup-active");
    $(this).parent(".variant-swatch-titles").parent(".variant-swatch-popup").removeClass("popup-active");
    $(this).parent(".variant-swatch-titles").parent(".variant-swatch-popup").siblings(".variant-swatch-popup-overlay").removeClass("popup-active");
})



//6. COLLECTIONS page - collection TABS
  
  //tabs
  $("ul li.collection-tab").click(function(e){
      e.preventDefault();
    // var linkURL = $(this).attr("linkURL");
    // console.log("link url ", linkURL);
    

   // $(document).on('click','.oost-pfs-filter-button[href="' + linkURL +'"]' )
      // $('.boost-pfs-filter-button[href="' + linkURL +'"]').trigger("click");



      // return false;
   // console.log($(this));
    // $(this).addClass("tab-active").siblings().removeClass("tab-active");
     // $(".collection-items__wrapper .collection-content").hide();
     //$(this).css("border-bottom","1px solid #111");

   //  console.log("class is", $($(this).data("value")));
  
    // $($(this).data("value")).fadeIn("slow");

    var loc = window.location.href.split('?')[0];
    window.location = loc;
  });

//if(document.location.search.length) {
//    $("ul li.collection-tab").removeClass('tab-active')
//} else {
//    $("ul li.collection-tab").addClass('tab-active')
//}

// active-tab-filter
//$(document).on('click', '.boost-pfs-filter-option-tag .boost-pfs-filter-option-label', function(){
//    $("ul li.collection-tab").removeClass('tab-active');
//    var currentCollectionName = $(this).children(".boost-pfs-filter-button").children(".boost-pfs-filter-option-value").text();
//    $(".collection__secondary-header h1").text(currentCollectionName);
//});



//update the title of the collection page
//if($(".boost-pfs-filter-option-label.selected")){
//    var currentCollectionName = $(".boost-pfs-filter-option-label.selected").children(".boost-pfs-filter-button").children(".boost-pfs-filter-option-value").html();
//    $(".collection__secondary-header h1").html(currentCollectionName);
//    console.log("class is selected"  + currentCollectionName);
//}




//7. PRODUCT PAGE REVIEW SCROLL

$(".product-page-review-btn").click(function() {
    $('html,body').animate({
        scrollTop: $(".product-reviews-section").offset().top - 100},
        'slow');
});

if ($(window).width() < 768) {
    $(".product-page-review-btn").click(function() {
        $('html,body').animate({
            scrollTop: $(".product-reviews-section-mobile").offset().top },
            'slow');
    });
}


// $(".product-page-review-btn").click(function() {
//     $('html,body').animate({
//         scrollTop: $(".product-reviews-section-mobile").offset().top - 100},
//         'slow');
// });



//reviews section Title (PDP page)
$(".jdgm-rev-widg__title").html("Radford Community");


//star rating and number of reviews (PDP pag)
var PDPreviewsNum = $("#judgeme_product_reviews").children(".jdgm-rev-widg").data("number-of-reviews");
//console.log("this page has " + PDPreviewsNum + " reviews!");
$(".prod-reviews #product-page-review-btn span").html(PDPreviewsNum);
//$(".jdgm-paginate").data("per-page") = PDPreviewsNum;
$(".jdgm-paginate").attr("data-per-page", PDPreviewsNum);
//console.log("data per page", $(".jdgm-paginate").data("per-page") )
$(".prod-reviews #product-page-review-stars").html($(".jdgm-rev-widg__summary-stars").html())



//8. REVIEWS 10 max (this is a temporary fix)
    //only for Mobile it should have 10 reviews

// if ($(window).width() < 768) {
// $(".jdgm-carousel-item:nth-child(n+10)").remove();
// $(".jdgm-carousel__item-wrapper ul.slick-dots li:nth-child(n+10)").remove();

// }



//9. SEARCH PAGE
var searchVal = $(".search-form-div form").children(".search-input").val();
//console.log("search val is", searchVal);

$(".search-form-div").children(".search-result").children("span").html(searchVal)



//10. EMAIL VALIDATION FOR KLAVIYO

$(document).on('click', '#email-submit-btn', function(){
    const pattern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var emailKlaviyo = $(this).siblings("#k_id_email").val();
    var emailTrim = emailKlaviyo.trim();
    //console.log(" btn clicked - email is", emailKlaviyo);

    if(!pattern.test(emailTrim)){
      	$(this).parent().siblings("[id^='email-success']").hide();
      	$(this).parent().siblings("[id^='email-error']").show();
       // console.log("email is", emailKlaviyo);
    }
})


//11. COLLECTIONS PAGE - FILTER SECTION
$(document).on('click','.collection-filter-button', function(){
$('.collection-page-filter-drawer').addClass("filter-drawer__open");
$('.boost-pfs-filter-tree-overlay').addClass("filter-drawer__open");
$('.boost-filter-close-btn').css("display", "block");
$('.boost-pfs-filter-options-wrapper').css("display", "block");
});


$(document).on('click','.filter-drawer__close', function(){
    $('.collection-page-filter-drawer').removeClass("filter-drawer__open");
    $('.boost-pfs-filter-tree-overlay').removeClass("filter-drawer__open");
    $('.boost-filter-close-btn').css("display", "none");
    $('.boost-pfs-filter-options-wrapper').css("display", "none");
    });


//12. COLLECTIONS PAGE - SORT SECTION
$(document).on('click', '.collection-sort-button', function(){
   // $(this).siblings(".boost-pfs-filter-top-sorting").css("display", "block");
   $(this).siblings(".collection-sort-dropdown").toggleClass("sort__active");
});

$(document).on('click', '.boost-pfs-filter-filter-dropdown li a', function(){
   // console.log("sorting option clicked", $(this).html());
    $(".collection-sort-button p").text($(this).html());
    $(this).parents(".collection-sort-dropdown").toggleClass("sort__active");
});

$(document).on('click', '.close-sort-popup', function(){
   // console.log("sorting option clicked");
    $(this).parents(".collection-sort-dropdown").toggleClass("sort__active");
});



//13. RETURNS AND REFUND POLICY SCROLL
$(".rrp_sidebar_link").click(function() {
    var sectionName = $(this).data("section");
    $('html,body').animate({  
        scrollTop: $("#" + sectionName).offset().top - 100},
        'slow');
});


// RRP Sidebar collapsing into Footer - Fix
$(window).scroll(() => { 
    // Distance from top of document to top of footer.
    topOfFooter = $('.footer').position().top;
    // Distance user has scrolled from top, adjusted to take in height of sidebar (570 pixels inc. padding).
    scrollDistanceFromTopOfDoc = $(document).scrollTop() + 570;
    // Difference between the two.
    scrollDistanceFromTopOfFooter = scrollDistanceFromTopOfDoc - topOfFooter;
  
    // If user has scrolled further than footer,
    // pull sidebar up using a negative margin.
    if (scrollDistanceFromTopOfDoc > topOfFooter) {
      $('.rrp_sidebar').css('margin-top',  0 - scrollDistanceFromTopOfFooter);
    } else  {
      $('.rrp_sidebar').css('margin-top', 0);
    }
});



//9. JS for SIDE CART (shopify cart API)

// const $AddToCartForm = $('#AddToCartForm-new');


//add to cart
// $(".AddToCartForm-submit").submit(function(e) {


//     //console.log("e event is", e)
//     // const $AddToCartForm = $(e.currentTarget.id);  -- this is working(but ID is #productSelect)
//     const $AddToCartForm = $(e.currentTarget).closest("#AddToCartForm-new");
//     //console.log("the addtocartform id is", $AddToCartForm);
//     e.preventDefault();
//     getMyCart(e);

//     openSideCart(e);
    

//     $.post('/cart/add.js', $AddToCartForm.serialize()).then(response => {

//         const item = JSON.parse(response);
//         var cartTotal = cartTotal + item.price;
//         console.log("cart total is", cartTotal);
//     });
// });


  $(document).on('click','.add-to-cart-pdp', function(e){
    e.preventDefault();
  
    var variantID = $("#default-variant-box").val();
    var planSelection = $('input:radio.rc-radio__input:checked').val();
    var sellingPlan = planSelection == 'subsave' ? $('.rc_widget__option__plans__dropdown').find(":selected").val() : '';    
    
    $.ajax({
        type: 'POST',
        url: '/cart/add.js',
        data: {
            id: variantID,
            quantity: 1,
            selling_plan: sellingPlan
        },
        dataType: 'json',
        success: function (data) {
           //('product addedd');
            getMyCart(e);
            openSideCart(e);
        },
        complete: function(data){
            // updateResult(data);
        },
        error: function(error){
            console.log('error');
        }
    })

});

    
var totalCount = 0;
var swatchLength = 0;
var taretIndex = 0;
if($('.main-images.main-variant-image').length > 0){
    totalCount = $('.main-images.main-variant-image .slick-track .slick-slide:not(".slick-cloned")').length;
    swatchLength = $('.variant-color-swatch-pdp').children().length/2;
    targetIndex = totalCount - swatchLength;
  //  console.log('target: ',swatchLength);
}


//for PDP - desktop and mobile
$(document).on('click', '.variant-color-swatch-pdp', function(){
    var currentIndex = $(this).index()/2;
    var productUrl = window.location.href.split('?')[0];
   // console.log(currentIndex);
    var labelSelection = $(this).attr("for");
    var variantID = $("input#" + labelSelection).val();
    $("#default-variant-box").val(variantID);
    var targetUrl = productUrl+"?variant="+variantID;
     // window.history.pushState({url: targetUrl}, , targetUrl);

     //desktop image slider
    if($('.main-images.main-variant-image').length > 0){
       $('.main-images.main-variant-image').slick('slickGoTo',(targetIndex + currentIndex));
    }
    //mobile image slider
    if($('.product-images-mobile.main-variant-image').length > 0){
        $('.product-images-mobile.main-variant-image').slick('slickGoTo',(targetIndex + currentIndex));
     }
    window.history.pushState({url: targetUrl},'', targetUrl);
    
});


//for other pages - desktop
$(document).on('click', '.variant-color-swatch-def', function(){
 
    //for swatches
    var index = $(this).index()/2;
    var imgUrl = $.trim($(this).parent().parent().parent().parent().parent().siblings('.boost-pfs-filter-product-item-image').find('.variant-data p:nth-child('+(index+1)+')').text());

    var labelSelection = $(this).attr("for");
    var variantID = $("input#" + labelSelection).val();
    // $("#default-variant-box").val(variantID);
    $(this).parent('.variant-swatch-options').parent('.variant-swatches').siblings('.default-variant-box-def').val(variantID);

    //for swatches
    if(typeof(imgUrl) !== "undefined" && imgUrl !== null ){
        if(imgUrl.indexOf('https') > -1){

           // console.log('v-selected');
            $(this).parent().parent().parent().parent().parent().siblings('.boost-pfs-filter-product-item-image').children('a').html('<img class="boost-pfs-filter-product-item-main-image Image--lazyLoad lazyautosizes lazyloaded" src="'+imgUrl+'" />');

        }
        else{
            var imgPath = $.trim( $(this).parent().parent().parent().parent().siblings('.boost-pfs-filter-product-item-image').children('span').text());
            var imgName = $.trim( $(this).parent().parent().parent().parent().siblings('.boost-pfs-filter-product-item-image').children('.variant-data').children('p:nth-child( ' + (index + 1 ) + ')').text());

            var imgUrl = imgPath +'/'+  imgName;

            $(this).parent().parent().parent().parent().siblings('.boost-pfs-filter-product-item-image').children('a').html('<img class="boost-pfs-filter-product-item-main-image Image--lazyLoad lazyautosizes lazyloaded" src="'+imgUrl+'" />');
        }
    }    
});



//current variant click - mobile popup swatches
$(document).on('click', '.current-variant', function(){

    var currentVariantTags = $(this).data("current-product-tags");
    
    if(currentVariantTags.includes("Bundles")){
        console.log("Product with bundles found");
        return;
    }

    //for swatches
    var index = $(this).index();
    //console.log("index in mobile ", index)
    var imgUrl = $.trim($(this).parent().parent().parent().parent().parent().parent().siblings('.boost-pfs-filter-product-item-image').find('.variant-data p:nth-child('+(index+1)+')').text());
   
   // console.log("imgURL inside mobile ", imgUrl);


       //for swatches
       if(typeof(imgUrl) !== "undefined" && imgUrl !== null ){
        if(imgUrl.indexOf('https') > -1){

          //  console.log('v-selected');
            $(this).parent().parent().parent().parent().parent().parent().siblings('.boost-pfs-filter-product-item-image').children('a').html('<img class="boost-pfs-filter-product-item-main-image Image--lazyLoad lazyautosizes lazyloaded" src="'+imgUrl+'" />');

        }
        else{
            var imgPath = $.trim( $(this).parent().parent().parent().parent().parent().siblings('.boost-pfs-filter-product-item-image').children('span').text());
            var imgName = $.trim( $(this).parent().parent().parent().parent().parent().siblings('.boost-pfs-filter-product-item-image').children('.variant-data').children('p:nth-child( ' + (index + 1 ) + ')').text());

            var imgUrl = imgPath +'/'+  imgName;
          //  console.log("imgURL inside mobile non filter ", imgUrl);

            $(this).parent().parent().parent().parent().parent().siblings('.boost-pfs-filter-product-item-image').children('a').html('<img class="boost-pfs-filter-product-item-main-image Image--lazyLoad lazyautosizes lazyloaded" src="'+imgUrl+'" />');
        }  
    }

})

//for mobile swatches
$(document).on('click', '.variant-color-swatch-mob', function(){
    
    //using data-attribute for mobile popup
    var labelSelection = $(this).data("swatch-for");
    var variantID = $("input#" + labelSelection).val();
    // $("#default-variant-box").val(variantID);
    $(this).parent('.current-variant').parent('.variant-swatch-options').parent('.variant-swatches').siblings('.default-variant-box-def').val(variantID);

    //this is a temporary fix - confirm with Yashwant once
    $(this).parents(".swatches-popup-mobile").siblings('.price-swatch-div').children('.default-variant-box-def').val(variantID);


    $(".variant-swatch-popup").removeClass("popup-active");
    $(".variant-swatch-popup-overlay").removeClass("popup-active");
    // $('body,html').animate({
    //     scrollTop: shadeOffset - 340
    // },300);
});



$(document).on('click','.add-to-cart-btn:not(".add-to-cart-pdp")', function(e){
    e.preventDefault();
    
    var variantID = $(this).siblings(".price-swatch-div").children(".default-variant-box-def").val();

    $.ajax({
        type: 'POST',
        url: '/cart/add.js',
        data: {
            quantity: 1,
            id: variantID,
            selling_plan: ''
        },
        dataType: 'json',
        success: function (data) {
          //  console.log('product addedd');
            getMyCart(e);
            openSideCart(e);
        },
        complete: function(data){
            // updateResult(data);
        },
        error: function(error){
            console.log('error');
        }
    })
})


//update cart
const adjustQty = (e, adjustment) => {

    //getMyCart();

    const itemVariantId = $(e.currentTarget).closest('.data-item').data('variant-id');
    var itemVariantQty = $(e.currentTarget).closest('.data-item').data('variant-quantity');
   // console.log("hello", e.currentTarget.closest('.data-item'))
  //  console.log("current variant id is", itemVariantId);
    //console.log("current variant id is 1:", item.variant.id);
    var newVariantQty;

    if(adjustment == 1){
        newVariantQty = itemVariantQty + 1;
    }
    if(adjustment == -1){
        newVariantQty = itemVariantQty - 1;
    }
    if(adjustment == 0){
        newVariantQty = 0;
    }

    $.post('/cart/change.js', { quantity: 0, id: itemVariantId }).then((response) => {
        var myData = JSON.parse(response);
      //  console.log("mydata", myData.item_count);
    });

    getMyCart(e);
    
}


// Delete cart product
$(document).on('click','#delete-cart-item__side-cart', function(e){
    e.preventDefault();
    var id = $(this).attr('data-variant-id');
    var that = $(this);
  //  console.log("delete btn clicked")
    $.ajax({
        type: 'POST',
        url: '/cart/change.js',
        dataType: 'json',
        data: {
            quantity: 0,
            id: id
        },
        success: function (data){
          //  console.log('success');
        },
        complete: function(data){
            that.parent('.side-cart-item').remove();
           // console.log('product deleted');
            getMyCart(e);

        },
        error: function(error){
            console.log(error)
        }
    });
});



// update quantity
$(document).on('click','.decrease-item-qty',function(e){
    e.preventDefault();
    var currentQty = parseInt($(this).siblings('.item-quantity-input-box').val());
    var id = $(this).parent('.data-item').attr('data-variant-id');
    var qty = currentQty - 1;

    if(qty == 0){
      //  console.log("quantity is 0");
        openDeleteItemPopup($(this));
        return;
    }
    $.ajax({
        type: 'POST',
        url: '/cart/change.js',
        dataType: 'json',
        data: {
            quantity: qty,
            id: id
        },
        success: function (data){
           // console.log('success');
        },
        complete: function(data){
            // that.parent('.side-cart-item').remove();
           // console.log('product deleted');
            getMyCart(e);

        },
        error: function(error){
            console.log(error)
        }
    });
});

  
$(document).on('click','.increase-item-qty',function(e){
    e.preventDefault();
    var currentQty = parseInt($(this).siblings('.item-quantity-input-box').val());
    var id = $(this).parent('.data-item').attr('data-variant-id');
    var qty = currentQty + 1;
    // console.log(qty);
    // return false;
    $.ajax({
        type: 'POST',
        url: '/cart/change.js',
        dataType: 'json',
        data: {
            quantity: qty,
            id: id
        },
        success: function (data){
           // console.log('success');
        },
        complete: function(data){
            // that.parent('.side-cart-item').remove();
           // console.log('product deleted');
            getMyCart(e);

        },
        error: function(error){
            console.log(error)
        }
    });
});


//get cart
function getMyCart(e) {

    e.preventDefault();
    
    //using this method because the original was giving me a parseerror
    $.ajax({
        type: "GET",
        url: "/cart.js",
        cache: false,
        contentType: "application/json; charset=utf-8",                  
        data: "[{}]",
        dataType: "json",
        success: function(data){
            updateResult(data)
        },
        error: "AjaxFail"
    });
}


$(document).on('click', '#delete-cart-item__popup-open', function(){
  //  console.log("delete item clicked");
    $(this).siblings('.delete-cart-item__popup').css("display", "block");
    $(this).siblings('.delete-cart-item__popup-overlay').css("display", "block");
});

  
$(document).on('click', '.delete-cart-item__popup-close', function(){
    $(this).parents('.delete-cart-item__popup').css("display", "none");
    $(this).parents('.delete-cart-item__popup').siblings('.delete-cart-item__popup-overlay').css("display", "none");
});


function openDeleteItemPopup(currentItem){
    currentItem.parents('.item-quantity').parents(".item-details").siblings('.delete-cart-item__popup').css("display", "block");
    currentItem.parents(".item-details").siblings('.delete-cart-item__popup-overlay').css("display", "block");
}


function updateResult(data) {
        cartData = data;
        console.log("my cart data is", cartData);
        
        var newItem = [];
        
        $(".side-cart-items").html("");

        cartData.items.forEach(item => {                  
            var subscriptionPlan = item.selling_plan_allocation ? "<span class='item-details-subscription'>" + item.selling_plan_allocation.selling_plan.name + "</span>" : "";
            
            newItem.push(`<div class="side-cart-item">
                            <button class="delete-cart-item data-item" id="delete-cart-item__popup-open" data-variant-id="${item.variant_id}">
                                    <svg width="10" height="11" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5.91616 5.50779L9.80997 1.73555C10.0634 1.49018 10.0634 1.09346 9.80997 0.848089C9.55669 0.60272 9.14716 0.60272 8.89388 0.848089L4.99995 4.62032L1.10614 0.848089C0.852742 0.60272 0.443335 0.60272 0.190052 0.848089C-0.0633506 1.09346 -0.0633506 1.49018 0.190052 1.73555L4.08386 5.50779L0.190052 9.28002C-0.0633506 9.52539 -0.0633506 9.92212 0.190052 10.1675C0.316278 10.2899 0.482247 10.3514 0.648098 10.3514C0.813948 10.3514 0.979799 10.2899 1.10614 10.1675L4.99995 6.39525L8.89388 10.1675C9.02022 10.2899 9.18607 10.3514 9.35192 10.3514C9.51777 10.3514 9.68362 10.2899 9.80997 10.1675C10.0634 9.92212 10.0634 9.52539 9.80997 9.28002L5.91616 5.50779Z" fill="black"/>
                                    </svg>                                                              
                            </button>

                            <div class="delete-cart-item__popup">
                            <div class="inner__content">
                                <button class=" close-item-popup delete-cart-item__popup-close">
                                    <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8.36049 6.85265L13.8631 1.52188C14.2212 1.17513 14.2212 0.614494 13.8631 0.267749C13.5051 -0.0789958 12.9264 -0.0789958 12.5685 0.267749L7.06574 5.59853L1.56316 0.267749C1.20506 -0.0789958 0.626505 -0.0789958 0.268574 0.267749C-0.0895246 0.614494 -0.0895246 1.17513 0.268574 1.52188L5.77115 6.85265L0.268574 12.1834C-0.0895246 12.5302 -0.0895246 13.0908 0.268574 13.4376C0.446953 13.6105 0.681494 13.6974 0.915867 13.6974C1.15024 13.6974 1.38461 13.6105 1.56316 13.4376L7.06574 8.10678L12.5685 13.4376C12.747 13.6105 12.9814 13.6974 13.2158 13.6974C13.4502 13.6974 13.6845 13.6105 13.8631 13.4376C14.2212 13.0908 14.2212 12.5302 13.8631 12.1834L8.36049 6.85265Z" fill="black"/>
                                    </svg>
                                </button>
                                <p>Are you sure that you want to delete ${item.title} ?</p>

                                <div class="delete__buttons">
                                    <button class="delete__cancel delete-cart-item__popup-close">Cancel</button>
                                    <button class="delete__yes" id="delete-cart-item__side-cart" data-variant-id="${item.variant_id}">Yes</button>
                                </div>

                            </div>
                            </div>
                            <div class="delete-cart-item__popup-overlay"></div>



                            <div class="item-img">
                            <a href="${item.url}"><img src="${item.image}" alt=""></a>   
                            </div>
                            <div class="item-details">
                                <div class="item-title">
                                    ${item.title}
                                    ${subscriptionPlan}
                                </div>
                                <div class="item-quantity">
                                    <div class="data-item" data-variant-id="${item.variant_id}" data-variant-quantity="${item.quantity}">
                                        <span class="decrease-item-qty" id="cart_qty--minus" style="cursor:pointer">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M15.4165 12.4902H8.0835C7.6685 12.4902 7.3335 12.1542 7.3335 11.7402C7.3335 11.3262 7.6685 10.9902 8.0835 10.9902H15.4165C15.8305 10.9902 16.1665 11.3262 16.1665 11.7402C16.1665 12.1542 15.8305 12.4902 15.4165 12.4902Z" fill="black"/>
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M7.064 2.5C4.292 2.5 2.5 4.397 2.5 7.335V16.165C2.5 19.103 4.292 21 7.064 21H16.436C19.209 21 21 19.103 21 16.165V7.335C21 4.397 19.209 2.5 16.436 2.5H7.064ZM16.436 22.5H7.064C3.437 22.5 1 19.954 1 16.165V7.335C1 3.546 3.437 1 7.064 1H16.436C20.063 1 22.5 3.546 22.5 7.335V16.165C22.5 19.954 20.063 22.5 16.436 22.5Z" fill="black"/>
                                            </svg>
                                        </span>
                                            <input class="item-quantity-input-box" type="number" name="updates[]" id="updates_{{ item.key }}" value="${item.quantity}" min="0">
                                        <span class="increase-item-qty" id="cart_qty--plus" style="cursor:pointer">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.75 16.1544C11.336 16.1544 11 15.8184 11 15.4044V8.07739C11 7.66339 11.336 7.32739 11.75 7.32739C12.164 7.32739 12.5 7.66339 12.5 8.07739V15.4044C12.5 15.8184 12.164 16.1544 11.75 16.1544Z" fill="black"/>
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M15.4165 12.4902H8.0835C7.6685 12.4902 7.3335 12.1542 7.3335 11.7402C7.3335 11.3262 7.6685 10.9902 8.0835 10.9902H15.4165C15.8305 10.9902 16.1665 11.3262 16.1665 11.7402C16.1665 12.1542 15.8305 12.4902 15.4165 12.4902Z" fill="black"/>
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M7.064 2.5C4.292 2.5 2.5 4.397 2.5 7.335V16.165C2.5 19.103 4.292 21 7.064 21H16.436C19.209 21 21 19.103 21 16.165V7.335C21 4.397 19.209 2.5 16.436 2.5H7.064ZM16.436 22.5H7.064C3.437 22.5 1 19.954 1 16.165V7.335C1 3.546 3.437 1 7.064 1H16.436C20.063 1 22.5 3.546 22.5 7.335V16.165C22.5 19.954 20.063 22.5 16.436 22.5Z" fill="black"/>
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                                <div class="item-price">
                                ${cartData.currency}  ${item.price/100 * item.quantity}
                                </div>
                            </div>
                      </div>`);

        });


        $(".side-cart-items").append(newItem.join(''));
        $(".side-cart-item-details").html(cartData.items.length);
        $(".cart-item-num-display span").text(cartData.item_count);
        // console.log("item updated");
        $(".side-cart-total-price").html( cartData.currency + " " + cartData.items_subtotal_price/100);

         //if cart is empty
         if(cartData.items.length == 0){
         //   console.log("cart is empty inside the updateresult")
            $(".side-cart-upsell").css("display", "none");
            $(".side-cart-sec").css("display", "none");
            $(".side-cart-checkout-box").css("display", "none");
            $(".side-cart-empty").css("display", "block");
          //  console.log("cart is empty")
        }
        else{
          //  console.log("cart is empty inside the updateresult")
            $(".side-cart-upsell").css("display", "block");
            $(".side-cart-sec").css("display", "block");
            $(".side-cart-checkout-box").css("display", "block");
            $(".side-cart-empty").css("display", "none");
          //  console.log("cart is empty")
        }


        //cart progress bar
       // var progressMaxVal = 110;   -- free shipping is $50
       var progressMaxVal = 50;
        var currentTotal = cartData.items_subtotal_price/100;
        var currentDiff = progressMaxVal - currentTotal;
        var widthValue = (currentTotal/progressMaxVal) * 100;

        
        if(currentTotal >= progressMaxVal){
            $(".shipping-progress-bar .progress-inner").css("width", "100%");
            $(".progress-bar-amount").html("Congratulations!");
            $(".progress-bar-ship").html("You get free standard shipping");
            $(".progress-inner").css("background", "#39CB06");
        }
        else if(currentTotal < progressMaxVal){
            $(".shipping-progress-bar .progress-inner").css("width", widthValue + "%");
            if(currentTotal == 0){
                $(".shipping-progress-bar .progress-inner").css("width", "1.8%");
            }
            $(".progress-bar-amount").html(`${cartData.currency} <span> 50 </span> Away`);
            $(".progress-bar-amount span").html(currentDiff);
            $(".progress-bar-ship").html("From free shipping!");
            $(".progress-inner").css("background", "#000");
        }
  
        //$(".side-cart-items").append(items);

    }

//$(document).on('click','#get-my-cart',  () => getMyCart());



//test - open side cart
function openSideCart(e){
    e.preventDefault();

    getMyCart(e);
    
    $(".side-cart").addClass("side-cart--open");
    $(".side-cart-overlay").css("display", "block");
  //$(".close-side-cart").css("display", "block")    
}

$(document).on('click','#open-side-cart',  (e) => openSideCart(e));

function closeSideCart(e){
    e.preventDefault();
    $(".side-cart").removeClass("side-cart--open");
    $(".side-cart-overlay").css("display", "none");
}

$(document).on('click','.close-side-cart',  (e) => closeSideCart(e));
$(document).on('click','.close-side-cart-chk',  (e) => closeSideCart(e));


// see more description on pdp
// $(".product-details .product-details-meta .desciption-box-first p:nth-child(n+2)").hide();
// $(".readless-desc").hide();
// $(".readmore-desc").on("click", function () {
//     $(".product-details .product-details-meta .desciption-box-first p:nth-child(n+2)").slideToggle(); 
//     $(this).hide();
//     $(".readless-desc").show();
// });
// $(".readless-desc").on("click", function () {
//     $(".product-details .product-details-meta .desciption-box-first p:nth-child(n+2)").slideToggle(); 
//     // $(this).text('Read more');
//     $(this).hide();
//     $(".readmore-desc").show();

// });

});



//COLLECTIONS page
// $(document).on('click', '.collections-links .collection-tab', function(){
//     $.ajax({
//         type: "GET",
//         url: "/products.json?collection_id=261291114656",
//         cache: false,
//         contentType: "application/json; charset=utf-8",                  
//         data: "[{}]",
//         dataType: "json",
//         success: function(data){
//             console.log("collection products", data)
//         },
//         error: "AjaxFail"
//     });
// })


//ACCOUNT DETAILS PAGE - tabs
$(document).on('click', '.account-section-tabs ul li', function(){
    $(this).addClass("account-tab-active").siblings().removeClass("account-tab-active");
    $(".account-section-data .account-section-content").hide();
    $($(this).data("account-value")).fadeIn("slow");

})


//video (mp4)
$("video").removeAttr("autoplay");


//REVIEWS SECTION - max-width: 85%
$('.jdgm-carousel-wrapper').parent().addClass('reviews-section-homepage');



/*****************************************************/
/***************** TPS HEADER SEARCH  ****************/
/*****************************************************/
const searchWindow = $('.tps-header-search');

// Icon Search - Active Toggle 
$(document).on('click', '.tps-header-search-icon', function() {
    $(searchWindow).toggleClass("active");
});

// Icon close Search
$(document).on('click', '.tps-header-search-close', function() {
    $(searchWindow).removeClass("active");
});

// Clear button
$("#tps-header-search-clear").on('click', function() {
    setActiveSearchInfo(false);
});

// Submit search form
$(".tps-header-search-form").submit( function(event) {
    event.preventDefault();
    const searchInput = $("#tps-header-search-input").val() ? '/search?q=' + $("#tps-header-search-input").val() : '/search';
    window.location = searchInput;
});

// Check input search
$("#tps-header-search-input").on("input", function() {    
    
    if ($(this).val()) {
        setActiveSearchInfo(true);   

        fetch(window.Shopify.routes.root + "search/suggest.json?q="+ $(this).val() +"&resources[type]=product&resources[options][unavailable_products]=hide&resources[options][fields]=title,product_type,variants.title")
        .then((response) => response.json())
        .then((resultList) => {
            const productList = resultList.resources.results.products.slice(0, 4);
            const productSuggestions = resultList.resources.results.products.slice(5);
            
            $(".tps-header-search-results-suggestions-list").empty();
            $(".tps-header-search-results-products-list").empty();  

            // Suggestions List Search
            if (productSuggestions.length > 0) {      
                productSuggestions.forEach( function(suggestion) {                        
                    $(".tps-header-search-results-suggestions-list").append(`<li><a href="${suggestion.url}">${suggestion.title}</a></li>`);                
                });
            } else {
                $(".tps-header-search-results-suggestions-list").removeClass('active');
                $(".tps-header-search-results-suggestions-list-start").addClass('active');
            }


            // Product List Search
            if (productList.length > 0) {  
                productList.forEach( function(product) {                        
                    $(".tps-header-search-results-products-list")
                    .append(`
                        <li>
                            <a href="${product.url}">
                                <div class="tps-header-search-results-products-image" style="background-image:url('${product.featured_image.url}')"></div>                    
                                <p class="tps-header-search-results-products-list-title">${product.title}</p>
                                <span class="tps-header-search-results-products-list-subtitle">subtitle</span>
                            </a>
                        </li>`
                    );                                    
                });
            } else {
                $(".tps-header-search-results-products-list")
                .append(`
                    <li>            
                        <p class="tps-header-search-results-products-list-title noresults">No results found</p>                                
                    </li>`
                );    
            }        
        })
        .catch((error) => {
            console.error('Error:', error);
        });

    } else {
        setActiveSearchInfo(false);

        $(".tps-header-search-results-products-list")
        .append(`
            <li>            
                <p class="tps-header-search-results-products-list-title noresults">EMPTY</p>                                
            </li>`
        );        
    }

});

function setActiveSearchInfo(result) {
    if (result) {
        $(".tps-header-search-results-products-list").addClass('active');
        $(".tps-header-search-results-products-list-start").removeClass('active');
        $(".tps-header-search-results-suggestions-list").addClass('active');
        $(".tps-header-search-results-suggestions-list-start").removeClass('active');
        $(".tps-header-search-results-suggestions-title").text('Suggested');
        $(".tps-header-search-results-products-title").text('Top results for "'+ $("#tps-header-search-input").val() +'"');
        $("#tps-header-search-clear").show();
    } else {
        $(".tps-header-search-results-products-list").removeClass('active');
        $(".tps-header-search-results-products-list-start").addClass('active');
        $(".tps-header-search-results-suggestions-list").removeClass('active');
        $(".tps-header-search-results-suggestions-list-start").addClass('active');
        $(".tps-header-search-results-suggestions-title").text('Popular Searches');
        $(".tps-header-search-results-products-title").text('Popular Products');
        $("#tps-header-search-clear").hide();
    }
}



$('.question-wrapper').click(function() {  
    let $this = $(this);

  $this.next().toggleClass('active');
  $this.toggleClass('active');
  
    // if ($this.next().hasClass('show')) {
    //     $this.next().removeClass('show');
    //     $this.next().slideUp(350);
    // } else {
    //     $this.parent().parent().find('li .inner').removeClass('show');
    //     $this.parent().parent().find('li .inner').slideUp(350);
    //     $this.next().toggleClass('show');
    //     $this.next().slideToggle(350);
    // }
});