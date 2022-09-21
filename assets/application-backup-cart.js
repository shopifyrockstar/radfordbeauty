// Put your application javascript here




//1. JS for hero-slider section
var counter = 1;
setInterval(function(){
    // document.getElementById("radio" + counter).checked = true;
    var checkBox = document.getElementById("radio" + counter);
    checkBox.checked = true;
    counter++;
    if(counter > 3){
        counter = 1;
    }
},5000);





$(document).ready(function(){
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
        
        console.log("span be clicked");
     
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
   console.log("desktop nav is open")
    
    $(".desktop-child-nav__slider").addClass("nav-slider--open");
    $(".desktop-child-nav__slider-overlay").css("display", "block");
  
   
    
}

function closeDesktopNav(e){
    e.preventDefault();
    console.log("desktop nav is closed")
    $(".desktop-child-nav__slider").removeClass("nav-slider--open");
    $(".desktop-child-nav__slider-overlay").css("display", "none");
    $(".close-desktop-nav-slider").css("left", "30.5%");
    $(".desktop-grandchild-nav__slider").removeClass("nav-slider-open-grandchild");
    $(".open-desktop-nav-slider__granchild a").css("color", "#000");
    $(".open-desktop-nav-slider__granchild svg path").css("fill", "#000");

}

$(document).on('click','.close-desktop-nav-slider',  (e) => closeDesktopNav(e));


//for second slider
$(document).on('click','.open-desktop-nav-slider__granchild',  (e) => openDesktopNavGC(e));

function openDesktopNavGC(e){
    e.preventDefault();
    console.log("grandchild nav is open")
     
     $(".desktop-grandchild-nav__slider").addClass("nav-slider-open-grandchild");
     $(".close-desktop-nav-slider").css("left", "63.5%");
     $(".open-desktop-nav-slider__granchild a").css("color", "#B98876");
     $(".open-desktop-nav-slider__granchild svg path").css("fill", "#B98876");
    
     
 }












//3. JS for PRODUCT-PAGE image slider
$('.main-images').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: false,
    asNavFor: '.thumb-images'
  });
  $('.thumb-images').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.main-images',
    dots: true,
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
    $(this).toggleClass("accordian-active");
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




// $(".variant-swatches .variant-color-input").first().prop('checked', true);
// $(".variant-swatches .variant-color-swatch .swatch-images").first().addClass("swatch-active");
// var firstSwatchName = $(".variant-swatches .variant-color-swatch").first().data("variant-title");
// $(".variant-swatches .color-swatch-name span").html(firstSwatchName);


$(".variant-swatches .variant-color-swatch").click(function(){
    var currentVariantTitile = $(this).data("variant-title");
    console.log("current variant is", currentVariantTitile) ;

    //update the color swatch name
    $(".variant-swatches .color-swatch-name span").html(currentVariantTitile);

    //border around the swatches

    $(this).children("img.swatch-images").addClass("swatch-active");
    $(this).siblings(".variant-color-swatch").children("img.swatch-images").removeClass("swatch-active");
    console.log($(this).siblings(".variant-color-swatch").children("img.swatch-images"))
});







//5. PDP page mobile - SWATCH popup

$(".swatch-popup-btn").click(function(e){
    e.stopPropagation();
    e.preventDefault();
    console.log("variant swacth btn clicked")
    // $(".variant-swatch-popup").addClass("popup-active");
    // $(".variant-swatch-popup-overlay").addClass("popup-active");
    $(this).siblings(".variant-swatch-popup").addClass("popup-active");
    $(this).siblings(".variant-swatch-popup-overlay").addClass("popup-active");
})

$(".swatch-popup-btn-close").click(function(e){
    e.stopPropagation();
    e.preventDefault();
    console.log("variant swacth btn close clicked")
    // $(".variant-swatch-popup").removeClass("popup-active");
    // $(".variant-swatch-popup-overlay").removeClass("popup-active");
    $(this).parent(".variant-swatch-titles").parent(".variant-swatch-popup").removeClass("popup-active");
    $(this).parent(".variant-swatch-titles").parent(".variant-swatch-popup").siblings(".variant-swatch-popup-overlay").removeClass("popup-active");
  
})





//6. COLLECTIONS page - collection TABS

  
  //tabs
  $("ul li.collection-tab").click(function(){
   // console.log($(this));
    $(this).addClass("tab-active").siblings().removeClass("tab-active");
     $(".collection-items__wrapper .collection-content").hide();
     //$(this).css("border-bottom","1px solid #111");

   //  console.log("class is", $($(this).data("value")));
  
    $($(this).data("value")).fadeIn("slow");
  });










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
console.log("this page has " + PDPreviewsNum + " reviews!");
$(".prod-reviews #product-page-review-btn span").html(PDPreviewsNum);
$(".prod-reviews #product-page-review-stars").html($(".jdgm-rev-widg__summary-stars").html())













//8. REVIEWS 10 max (this is a temporary fix)
    //only for Mobile it should have 10 reviews

if ($(window).width() < 768) {
$(".jdgm-carousel-item:nth-child(n+10)").remove();
$(".jdgm-carousel__item-wrapper ul.slick-dots li:nth-child(n+10)").remove();

}



//9. SEARCH PAGE
var searchVal = $(".search-form-div form").children(".search-input").val();
console.log("search val is", searchVal);

$(".search-form-div").children(".search-result").children("span").html(searchVal)




//10. EMAIL VALIDATION FOR KLAVIYO

$(document).on('click', '#email-submit-btn', function(){
    const pattern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var emailKlaviyo = $("#k_id_email").val();
    var emailTrim = emailKlaviyo.trim();
    console.log(" btn clicked - email is", emailKlaviyo);

    if(!pattern.test(emailTrim)){
        $("#email-success").hide();
        $("#email-error").show();
        console.log("email is", emailKlaviyo);
    }
})





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
    // var variantID = $(this).siblings('input[name="id"]').val();

    console.log($(this).siblings(".variant-swatches").children(".variant-swatch-options").find('input:checked').val());
    var variantID = $("#default-variant-box").val();

    $.ajax({
        type: 'POST',
        url: '/cart/add.js',
        data: {
            quantity: 1,
            id: variantID
        },
        dataType: 'json',
        success: function (data) {
            console.log('product addedd');
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

$(document).on('click', '.variant-color-swatch-pdp', function(){
    var labelSelection = $(this).attr("for");
    var variantID = $("input#" + labelSelection).val();
    $("#default-variant-box").val(variantID);
    
});

$(document).on('click', '.variant-color-swatch-def', function(){
    var labelSelection = $(this).attr("for");
    var variantID = $("input#" + labelSelection).val();
    // $("#default-variant-box").val(variantID);
    $(this).parent('.variant-swatch-options').parent('.variant-swatches').siblings('.default-variant-box-def').val(variantID);

    
});

$(document).on('click', '.variant-color-swatch-mob', function(){
    // var labelSelection = $(this).attr("for");


    
    //using data-attribute for mobile popup
    var labelSelection = $(this).data("swatch-for");
    var variantID = $("input#" + labelSelection).val();
    // $("#default-variant-box").val(variantID);
    $(this).parent('.current-variant').parent('.variant-swatch-options').parent('.variant-swatches').siblings('.default-variant-box-def').val(variantID);

    //this is a temporary fix - confirm with Yashwant once
    $(this).parents(".swatches-popup-mobile").siblings('.price-swatch-div').children('.default-variant-box-def').val(variantID);
    
});










$(document).on('click','.add-to-cart-btn:not(".add-to-cart-pdp")', function(e){
    e.preventDefault();
    // var variantID = '';
    

    // var variantBlock = $(this).siblings('.price-swatch-div').children('.variant-swatches');
    // if(variantBlock){
    // if(variantBlock.length > 0){
        
    //     variantID = $(this).siblings('.price-swatch-div').children('.variant-swatches').find('input[name="id"]').val();
    // }
    // else{
    //     variantID = $(this).siblings('.price-swatch-div').children('input').val();
    // }
    // }

    // var variantID = $("#default-variant-box").val();
    var variantID = $(this).siblings(".price-swatch-div").children(".default-variant-box-def").val();
    console.log("variant Id is "+ variantID);

    $.ajax({
        type: 'POST',
        url: '/cart/add.js',
        data: {
            quantity: 1,
            id: variantID
        },
        dataType: 'json',
        success: function (data) {
            console.log('product addedd');
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
    console.log("hello", e.currentTarget.closest('.data-item'))
    console.log("current variant id is", itemVariantId);
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
        console.log("mydata", myData.item_count);
    });

    getMyCart(e);
    
}
// $(document).on('click','#cart_qty--plus',  (e) => adjustQty(e, 1));
// $(document).on('click','#cart_qty--minus',  (e) => adjustQty(e, -1));

// $(document).on('click','#delete-cart-item__side-cart',  (e) => adjustQty(e, 0));
// $(document).on('click','#delete-cart-item__side-cart',(e) => deleteCartProduct(e));


// Delete cart product

$(document).on('click','#delete-cart-item__side-cart', function(e){
    e.preventDefault();
    var id = $(this).attr('data-variant-id');
    var that = $(this);
    $.ajax({
        type: 'POST',
        url: '/cart/change.js',
        dataType: 'json',
        data: {
            quantity: 0,
            id: id
        },
        success: function (data){
            console.log('success');
        },
        complete: function(data){
            that.parent('.side-cart-item').remove();
            console.log('product deleted');
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
    $.ajax({
        type: 'POST',
        url: '/cart/change.js',
        dataType: 'json',
        data: {
            quantity: qty,
            id: id
        },
        success: function (data){
            console.log('success');
        },
        complete: function(data){
            // that.parent('.side-cart-item').remove();
            console.log('product deleted');
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
            console.log('success');
        },
        complete: function(data){
            // that.parent('.side-cart-item').remove();
            console.log('product deleted');
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
    //const response = await $.get('/cart.js');
    //const data = JSON.parse(response);

    console.log("after get my cart is  called from open cart")


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



    

function updateResult(data) {
        cartData = data;
        console.log("my cart data is", cartData);
        console.log("cart-items length",cartData.items.length )

       

        var newItem = [];
        // if(cartData.items.length > 0){
        //create a template using template literal

        $(".side-cart-items").html("");

        cartData.items.forEach(item => {
            console.log(item.title);
            newItem.push(`<div class="side-cart-item">
                            <button class="delete-cart-item data-item" id="delete-cart-item__side-cart" data-variant-id="${item.variant_id}">
                                    <svg width="10" height="11" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5.91616 5.50779L9.80997 1.73555C10.0634 1.49018 10.0634 1.09346 9.80997 0.848089C9.55669 0.60272 9.14716 0.60272 8.89388 0.848089L4.99995 4.62032L1.10614 0.848089C0.852742 0.60272 0.443335 0.60272 0.190052 0.848089C-0.0633506 1.09346 -0.0633506 1.49018 0.190052 1.73555L4.08386 5.50779L0.190052 9.28002C-0.0633506 9.52539 -0.0633506 9.92212 0.190052 10.1675C0.316278 10.2899 0.482247 10.3514 0.648098 10.3514C0.813948 10.3514 0.979799 10.2899 1.10614 10.1675L4.99995 6.39525L8.89388 10.1675C9.02022 10.2899 9.18607 10.3514 9.35192 10.3514C9.51777 10.3514 9.68362 10.2899 9.80997 10.1675C10.0634 9.92212 10.0634 9.52539 9.80997 9.28002L5.91616 5.50779Z" fill="black"/>
                                    </svg>                                                              
                            </button>



                            <div class="item-img">
                            <a href="${item.url}"><img src="${item.image}" alt=""></a>   
                            </div>
                            <div class="item-details">
                                <div class="item-title">
                                    ${item.title}
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
                                   C$ ${item.price/100}
                                </div>
                            </div>


            </div>`);

            

            
        });
    // }


        $(".side-cart-items").append(newItem.join(''));
        $(".side-cart-item-details").html(cartData.items.length);
        $(".side-cart-total-price").html("C$" + cartData.items_subtotal_price/100);

         //if cart is empty
         if(cartData.items.length == 0){
            console.log("cart is empty inside the updateresult")
            $(".side-cart-upsell").css("display", "none");
            $(".side-cart-sec").css("display", "none");
            $(".side-cart-checkout-box").css("display", "none");
            $(".side-cart-empty").css("display", "block");
            console.log("cart is empty")
        }
        else{
            console.log("cart is empty inside the updateresult")
            $(".side-cart-upsell").css("display", "block");
            $(".side-cart-sec").css("display", "block");
            $(".side-cart-checkout-box").css("display", "block");
            $(".side-cart-empty").css("display", "none");
            console.log("cart is empty")
        }


        //cart progress bar
        var progressMaxVal = 110;
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
            $(".progress-bar-amount").html(`$<span>110</span> Away`);
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
    
    
    // console.log("get my cart opened")
    // $("#get-my-cart").trigger("click");
    // console.log("get my cart trigger click")
}

$(document).on('click','#open-side-cart',  (e) => openSideCart(e));

function closeSideCart(e){
    e.preventDefault();
    $(".side-cart").removeClass("side-cart--open");
    $(".side-cart-overlay").css("display", "none");

}

$(document).on('click','.close-side-cart',  (e) => closeSideCart(e));
$(document).on('click','.close-side-cart-chk',  (e) => closeSideCart(e));


});