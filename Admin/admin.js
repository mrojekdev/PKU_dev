    $(document).ready(function() {
        $('.JadwalDok').submit(function() {
            var validasi = $('#validasi').val().length; 
            var validasi2 = $('#validasi2').val().length; 
            var validasi3 = $('#validasi3').val().length; 
            var validasi4 = $('#validasi4').val().length; 
            // console.log("eek: " + validasi.toString() + validasi2.toString());   
 
            if(validasi > 0 && validasi2 > 0 && validasi3 > 0 && validasi4 > 0)
            {
                $("#ParentVal").attr('class','form-group has-feedback has-success');
                $("#ParentVal2").attr('class','form-group has-feedback has-success');
                $("#ParentVal3").attr('class','form-group has-feedback has-success');
                $("#ParentVal4").attr('class','form-group has-feedback has-success');
                $("#LogoVal").attr('class','glyphicon form-control-feedback glyphicon-ok');
                $("#LogoVal2").attr('class','glyphicon form-control-feedback glyphicon-ok');
                $("#LogoVal3").attr('class','glyphicon form-control-feedback glyphicon-ok');
                $("#LogoVal4").attr('class','glyphicon form-control-feedback glyphicon-ok');
                return true;
            }
            else
            {    
                if(validasi > 0 )
                {
                    $("#ParentVal").attr('class','form-group has-feedback has-success');
                    $("#LogoVal").attr('class','glyphicon form-control-feedback glyphicon-ok');
                }
                else
                {
                    $("#ParentVal").attr('class','form-group has-feedback has-error');
                    $("#LogoVal").attr('class','glyphicon form-control-feedback glyphicon-remove');
                }

                if(validasi2 > 0)
                {
                    $("#ParentVal2").attr('class','form-group has-feedback has-success');
                    $("#LogoVal2").attr('class','glyphicon form-control-feedback glyphicon-ok');
                }
                else
                {
                    $("#ParentVal2").attr('class','form-group has-feedback has-error');
                    $("#LogoVal2").attr('class','glyphicon form-control-feedback glyphicon-remove');
                }

                if(validasi3 > 0)
                {
                     $("#ParentVal3").attr('class','form-group has-feedback has-success');
                     $("#LogoVal3").attr('class','glyphicon form-control-feedback glyphicon-ok');
                }
                else
                {
                    $("#ParentVal3").attr('class','form-group has-feedback has-error');
                    $("#LogoVal3").attr('class','glyphicon form-control-feedback glyphicon-remove');
                }

                if(validasi4 > 0)
                {
                    $("#ParentVal4").attr('class','form-group has-feedback has-success');
                    $("#LogoVal4").attr('class','glyphicon form-control-feedback glyphicon-ok');
                } 
                else
                {
                    $("#ParentVal4").attr('class','form-group has-feedback has-error');
                    $("#LogoVal4").attr('class','glyphicon form-control-feedback glyphicon-remove');
                }
                return false;
            }

        });
    });


  $(document).ready(function() {
        $('.ManJadDok').submit(function() {
            var validasi5 = $('#validasi5').val().length; 
            var validasi6 = $('#validasi6').val().length; 
            var validasi7 = $('#validasi7').val().length; 
            var validasi8 = $('#validasi8').val().length; 
            // console.log("eek: " + validasi.toString() + validasi2.toString());   
 
            if(validasi5 > 0 && validasi6 > 0 && validasi7 > 0 && validasi8 > 0)
            {
                $("#ParentVal5").attr('class','form-group has-feedback has-success');
                $("#ParentVal6").attr('class','form-group has-feedback has-success');
                $("#ParentVal7").attr('class','form-group has-feedback has-success');
                $("#ParentVal8").attr('class','form-group has-feedback has-success');
                $("#LogoVal5").attr('class','glyphicon form-control-feedback glyphicon-ok');
                $("#LogoVal6").attr('class','glyphicon form-control-feedback glyphicon-ok');
                $("#LogoVal7").attr('class','glyphicon form-control-feedback glyphicon-ok');
                $("#LogoVal8").attr('class','glyphicon form-control-feedback glyphicon-ok');
                return true;
            }
            else
            {    
                if(validasi5 > 0 )
                {
                    $("#ParentVal5").attr('class','form-group has-feedback has-success');
                    $("#LogoVal5").attr('class','glyphicon form-control-feedback glyphicon-ok');
                }
                else
                {
                    $("#ParentVal5").attr('class','form-group has-feedback has-error');
                    $("#LogoVal5").attr('class','glyphicon form-control-feedback glyphicon-remove');
                }

                if(validasi6 > 0)
                {
                    $("#ParentVal6").attr('class','form-group has-feedback has-success');
                    $("#LogoVal6").attr('class','glyphicon form-control-feedback glyphicon-ok');
                }
                else
                {
                    $("#ParentVal6").attr('class','form-group has-feedback has-error');
                    $("#LogoVal6").attr('class','glyphicon form-control-feedback glyphicon-remove');
                }

                if(validasi7 > 0)
                {
                     $("#ParentVal7").attr('class','form-group has-feedback has-success');
                     $("#LogoVal7").attr('class','glyphicon form-control-feedback glyphicon-ok');
                }
                else
                {
                    $("#ParentVal7").attr('class','form-group has-feedback has-error');
                    $("#LogoVal7").attr('class','glyphicon form-control-feedback glyphicon-remove');
                }

                if(validasi8 > 0)
                {
                    $("#ParentVal8").attr('class','form-group has-feedback has-success');
                    $("#LogoVal8").attr('class','glyphicon form-control-feedback glyphicon-ok');
                } 
                else
                {
                    $("#ParentVal8").attr('class','form-group has-feedback has-error');
                    $("#LogoVal8").attr('class','glyphicon form-control-feedback glyphicon-remove');
                }
                return false;
            }

        });
    });


/* ERROR
parent :has-error
span : glyphicon-remove

SUCCESS
parent : has-success
span : glyphicon-ok

*/