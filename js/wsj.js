/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function changeImage()
{ 
    var distribution_area = $("#distribution_area option:selected").val();
    $("#mapSmall img").attr("src", "img/preview.gif");
    $.ajax({
        data: {change_image_from: true, distribution_area: distribution_area},
        type: 'post',
        url: 'ajax.php',
        success: function (data, statusText, xhr) {
       
            $("#mapSmall img").attr("src", data);
             $("#mapSmall a").attr("href", data); 
        }
    });
}



$("#range").ionRangeSlider({
    type: "single",
    grid: true,
    min: 0,
    max: 6,
    prefix: "$",
    force_edges: true,
    values: [
        '<span></span>',
        '<span>1 Column</span><br/>(1.68")',
        '<span>2 Column</span><br/>(3.52")',
        '<span>3 Column</span><br/>(5.35")',
        '<span>4 Column</span><br/>(7.19")',
        '<span>5 Column</span><br/>(9.02")',
        '<span>6 Column</span><br/>(10.87")'

    ],
     onChange: function (data) {
		var width_value = data.from;
		var range1 = $("#range1").data("ionRangeSlider");
		
		
		if(width_value == 1)
		{
			if($("#advertise").val() == 20)
			{
				var width = data.from_percent;
				$('.estimateGraphInner').width(width+'%');
				range1.update({
					from_min:2,
					min: 2,
				});
			}
			else
			{
				var width = data.from_percent;
				$('.estimateGraphInner').width(width+'%');
				range1.update({
					from_min:1,
					min: 1,
				});
			}	

		}
		else if(width_value == 2)
		{
			var width = data.from_percent;
                       
			$('.estimateGraphInner').width(width+'%');
                      
			range1.update({
				from:2,
				min: 2,
			});
                         
		}
		else if(width_value == 3)
		{
			var width = data.from_percent - 0.6;
			$('.estimateGraphInner').width(width+'%');
			range1.update({
				from_min:3,
				min: 3,
			});
		}
		else if(width_value == 4)
		{
			var width = data.from_percent - 2;
			$('.estimateGraphInner').width(width+'%');
			range1.update({
				from_min:6,
				min: 6,
			});
		}
		else if(width_value == 5)
		{
			var width = data.from_percent - 3;
			$('.estimateGraphInner').width(width+'%');
			range1.update({
				from_min:7,
				min: 7,
			});
		}
		else if(width_value == 6)
		{
			var width = data.from_percent;
			$('.estimateGraphInner').width(width+'%');
			range1.update({
				from_min:8,
				min: 8,
			});
		}
		else
		{
			var width = data.from_percent;
			$('.estimateGraphInner').width(width+'%');
			range1.update({
				from_min:0,
			});
		}
		
    },
	onFinish: function (data) {
		var range1 = $("#range1").data("ionRangeSlider");
		var width_value = data.from;
		if(width_value == 1)
		{
			if($("#advertise").val() == 20)
			{
				var width = data.from_percent;
				$('.estimateGraphInner').width(width+'%');
				range1.update({
					from_min:2,
					min: 2,
				});
			}
			else
			{
				var width = data.from_percent;
				$('.estimateGraphInner').width(width+'%');
				range1.update({
					from_min:1,
					min: 1,
				});
			}	

		}
		else if(width_value == 2)
		{
			var width = data.from_percent;
			$('.estimateGraphInner').width(width+'%');
			range1.update({
				from_min:2,
				min: 2,
			});
		}
		else if(width_value == 3)
		{
			var width = data.from_percent - 0.6;
			$('.estimateGraphInner').width(width+'%');
			range1.update({
				from_min:3,
				min: 3,
			});
		}
		else if(width_value == 4)
		{
			var width = data.from_percent - 2;
			$('.estimateGraphInner').width(width+'%');
			range1.update({
				from_min:6,
				min: 6,
			});
		}
		else if(width_value == 5)
		{
			var width = data.from_percent - 3;
			$('.estimateGraphInner').width(width+'%');
			range1.update({
				from_min:7,
				min: 7,
			});
		}
		else if(width_value == 6)
		{
			var width = data.from_percent;
			$('.estimateGraphInner').width(width+'%');
			range1.update({
				from_min:8,
				min: 8,
			});
		}
		else
		{
			var width = data.from_percent;
			$('.estimateGraphInner').width(width+'%');
			range1.update({
				from_min:0,
			});
		}
		SubmitFormData();
    }
});



$("#range1").ionRangeSlider({
    type: "single",
    grid: true,
    from: 0,
    values: [
        '0"', '1"', '2"', '3"', '4"', '5"', '6"', '7"', '8"', '9"', '10"', '11"', '12"', '13"', '14"', '15"', '16"', '17"', '18"', '19"', '20"', '21"'
    ],
    onChange: function (data) {
       
		var height = data.from_percent;
		$('.estimateGraphInner').height(height+'%');
		
    },
	onUpdate: function (data) {
       
		var height = data.from_percent;
		$('.estimateGraphInner').height(height+'%');

		
    },
	onFinish: function (data) {
		SubmitFormData();
    }
});


$('.est-price').css('display','none');

function ResetCategoryChange()
{
	var range = $("#range").data("ionRangeSlider");
	var range1 = $("#range1").data("ionRangeSlider");
	
	if($("#advertise").val() == 20 && $("#range").val() == '<span>1 Column</span>(1.68”)')
	{
		range1.update({
			from_min:2,
			min: 2
		});
	}

	else
	{
	var width_value = range.result.from;
	if(width_value == 1)
		{
			
				var width = range.result.from_percent;
				$('.estimateGraphInner').width(width+'%');
				range1.update({
					from_min:1,
					min: 1,
				});	

		}
		else if(width_value == 2)
		{
			var width = range.result.from_percent;
			$('.estimateGraphInner').width(width+'%');
			range1.update({
				from_min:2,
				min: 2,
			});
		}
		else if(width_value == 3)
		{
			var width = range.result.from_percent - 0.6;
			$('.estimateGraphInner').width(width+'%');
			range1.update({
				from_min:3,
				min: 3,
			});
		}
		else if(width_value == 4)
		{
			var width = range.result.from_percent - 2;
			$('.estimateGraphInner').width(width+'%');
			range1.update({
				from_min:6,
				min: 6,
			});
		}
		else if(width_value == 5)
		{
			var width = range.result.from_percent - 3;
			$('.estimateGraphInner').width(width+'%');
			range1.update({
				from_min:7,
				min: 7,
			});
		}
		else if(width_value == 6)
		{
			var width = range.result.from_percent;
			$('.estimateGraphInner').width(width+'%');
			range1.update({
				from_min:8,
				min: 8,
			});
		}
		else
		{
			var width = range.result.from_percent;
			$('.estimateGraphInner').width(width+'%');
			range1.update({
				from_min:0,
			});
		}
	
	
	}	
SubmitFormData();
}


function ResetFormData()
{
	$("#advertise").selectbox("detach").val($("#advertise").find('option:first-child').val());
	
	$("#distribution_area").selectbox("detach").val($("#distribution_area").find('option:first-child').val());
	
	var range1 = $("#range1").data("ionRangeSlider");
	range1.update({
		from_min:0,
		min: 0,
		from: 0,
	});
	$("#range").data("ionRangeSlider").reset();
	$("#range1").data("ionRangeSlider").reset();
	$("#total_estimated_price").text('');
	$('.est-price').css('display','none');
	$("#column_depth").css('display','none');
	$("#unit_size").css('display','none');
	var distribution_area = $("#distribution_area").find('option:first-child').val();
	$.ajax({ 
         data: {change_image_from: true, distribution_area: distribution_area},
         type: 'post',
         url: 'ajax.php',
         success: function(data) {
			
            $("#mapSmall img").attr("src", data);
             $("#mapSmall a").attr("href", data); 
        }
    });
}


var currentRequest = null;
function SubmitFormData()
{
	$("#total_estimated_price").css('display','none');
	$(' #ajax_loading').css('display','inline-block');
        var advertise = $("#advertise").val();
	var distribution_area = $("#distribution_area option:selected").val();
	var width_data = $("#range").val();
	var height_data = $("#range1").val();
 
 
	  
	currentRequest = $.ajax({ 
         data: {estimate_from: true,advertise: advertise, distribution_area:distribution_area, width_data:width_data, height_data:height_data},
         type: 'post',
         url: 'ajax.php',
		 beforeSend : function()    {           
			if(currentRequest != null) {
				currentRequest.abort();
			}
		},
         success: function(data) {
             
          		
			 $('.est-price').css('display','block');
			 $(' #ajax_loading').css('display','none');
			 $("#total_estimated_price").css('display','block');
			 //console.log(data.total_estimated_price);
			 
				var column_size = $("#range").val();

				var column_label = column_size.substring(6,14);
				var unit_label = column_size.substring(21);

				var depth_inch = $("#range1").val();
				$("#column_depth").html(column_label +' x '+ depth_inch +' Height');
				$("#unit_size").html('Unit Size '+ unit_label +' x '+ depth_inch);
				$('.est-price').css('display','block');
				$("#column_depth").css('display','block');
				$("#unit_size").css('display','block');
			
			 
			 $("#total_estimated_price").text('$'+data);
                         
			 
        }
    });
}



