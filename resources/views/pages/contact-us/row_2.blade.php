<form id="row-2" class="row justify-content-center bg-effect">
    <div class="col-sm-12 col-md-6">
        <h2>Contactez-nous</h2>
        <p>Vous avez une suggestion ou un commentaire?</p>
    </div>
    <div class="col-sm-12 col-md-6 col-lg-4">
    </div>
    <div class="col-sm-12 col-md-4 side-inputs">
        <input type="text"  placeholder="Votre nom      (optionel)" />
        <input type="email" placeholder="Votre email    (optionel)" />

        <h5 class="rating-ttl">Comment notereriez-vous?</h5>
        <div class="rating">
            <input id="star5" name="star" type="radio" value="5" class="radio-btn hide" />
            <label for="star5" >☆</label>
            <input id="star4" name="star" type="radio" value="4" class="radio-btn hide" />
            <label for="star4" >☆</label>
            <input id="star3" name="star" type="radio" value="3" class="radio-btn hide" />
            <label for="star3" >☆</label>
            <input id="star2" name="star" type="radio" value="2" class="radio-btn hide" />
            <label for="star2" >☆</label>
            <input id="star1" name="star" type="radio" value="1" class="radio-btn hide" />
            <label for="star1" >☆</label>
            <div class="clear"></div>
        </div>
    </div>
    <div class="col-sm-12 col-md-6">
        <textarea rows="8" cols="60" name="description"></textarea>
    </div>
    <div class="col-sm-10" style="text-align:right;padding-top: 20px;">
        <input class="button" type="submit" value="Envoyer" />
    </div>
    
</form>

<style>
    #row-2{
        text-align: center;
        margin-top: 20px !important;
        margin-bottom: 80px !important;
    }
    #row-2.bg-effect>div{
        background: rgba(40,40,40, 0.05);
    }
    #row-2>div:first-of-type{
        padding-top: 20px;
    }
    #row-2>div:last-of-type{
        padding-bottom: 20px;
    }
    #row-2 div.side-inputs{
        text-align: center;
    }
    #row-2 .side-inputs input{
        width: 100%;
        max-width: 300px;
        margin-top: 5px;
        margin-bottom: 5px;
    }
    #row-2 div input[type="submit"]{
        width: 100%;
        max-width: 400px;
        margin-top: 5px;
        margin-bottom: 5px;
    }
    #row-2 div textarea[name="description"]{
        width: 100%;
        height: 100%;
    }

    #row-2 h5.rating-ttl{
        padding-top: 20px;
    }

    #row-2 div.rating {
        width: 50%;
        padding-top: 5px;
        padding-bottom: 20px;
        unicode-bidi: bidi-override;
        direction: rtl;
        text-align: center;
        position: relative;
        transform: scale(2);
    }

    #row-2 div.rating > label {
        float: right;
        display: inline;
        padding: 0;
        margin: 0;
        position: relative;
        width: 1.1em;
        cursor: pointer;
        color: #000;
    }

    #row-2 div.rating > label:hover,
    #row-2 div.rating > label:hover ~ label,
    #row-2 div.rating > input.radio-btn:checked ~ label {
        color: transparent;
    }

    #row-2 div.rating > label:hover:before,
    #row-2 div.rating > label:hover ~ label:before,
    #row-2 div.rating > input.radio-btn:checked ~ label:before,
    #row-2 div.rating > input.radio-btn:checked ~ label:before {
        content: "\2605";
        position: absolute;
        left: 0;
        color: #FFD700;
    }

/*

#sendMessage{
    background: rgba(211, 211, 211, 0.15);
    margin-top: 35px;
    margin-bottom: 80px;
    padding-top: 20px;
    padding-left: 60px;
    padding-bottom:15px;
}

#sendMessage form{
    width: 70%;
    padding-left: 20px;
    margin-top: 20px;
    margin-bottom: 10px;
}


#sendMessage .button{
    float: right;
    min-width: 200px;
}
#contactUs table.no-indent{
    line-height: 1;
    font-size: 90%;
}

@media only screen and (min-width: 1100px) {
    #contactUs-box{
      margin-left: 5%;
      max-width: 48%;
    }
}
@media only screen and (max-width: 1100px){
    #sendMessage{
        padding-left: 20px;
    }
    
    #sendMessage form{
        width: 90%;
        padding-left: 2vw;
        margin-top: 5px;
        margin-bottom: 5px;
    }
    #sendMessage form input{
        margin-top: 5px;
        margin-bottom: 5px;
        min-width: 60vw;
    }
}
 */
 </style>

 <script>
 $(document).ready(function(){
    // Check Radio-box
    $("#row-2 div.rating input:radio").attr("checked", false);

    $('#row-2 div.rating input').click(function () {
        $("#row-2 div.rating span").removeClass('checked');
        $(this).parent().addClass('checked');
    });

    $('input:radio').change(
      function(){
        var userRating = this.value;
        alert(userRating);
    }); 
});
 
 </script>