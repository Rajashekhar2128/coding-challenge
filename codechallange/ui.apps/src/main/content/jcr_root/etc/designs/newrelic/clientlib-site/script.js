$(document).ready(function() {
    $('.per-combo-template span').on('click', function(){
        var $self = $(this)
        $self.addClass('cycle-pager-active').siblings().removeClass('cycle-pager-active');
        var index = $self.attr('data-link-index');
        $('[data-content-index]').hide();
        $('[data-content-index='+index+']').fadeIn('slow');
    });
});