/*
 * octo-ion
 */

function Ion(){
    this.preloaderSelector;
    this.preloaderStartInterval = 700;
}

Ion.prototype = {

    /* for ReplaceAll */
    escapeRegExp: function (str)
    {
        return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
    },
    /* ReplaceAll */
    replaceAll: function (find, replace, str)
    {
        return str.replace(new RegExp(this.escapeRegExp(find), 'g'), replace);
    },
    /* Preloader selector */
    setPreloader: function(selector)
    {
        this.preloaderSelector = selector;
    },
    /* Preloader show */
    preloaderShow: function ()
    {
        var selector = this.preloaderSelector;
        if(!selector){
            this.preloaderSelector = selector = '#Preloader';
        }
        var si = this.preloaderStartInterval;
        $(selector).attr("complite", "false");
        setTimeout(function ()
        {
            if ($(selector).attr("complite") === "false") {
                $(selector).fadeIn(300);
                $('body').css('cursor','wait');
            }
        }, si);
    },
    /* Preloader hide */
    preloaderHide: function ()
    {
        $(this.preloaderSelector).attr("complite", "true");
        $(this.preloaderSelector).hide();
        $('body').css('cursor','default');
    },
    /* Parse command from ajax attribute */
    parseAttr: function (attr, ac)
    {
        if (RegExp(attr + '=(.+?);', 'ig').test(ac)) {
            return RegExp(attr + '=(.+?);', 'ig').exec(ac)[1];
        } else {
            return false;
        }
    },
    errorAlert: function (errorMessage)
    {
        $(body).append('<erroralert>'
        +'<errorclose>x</errorclose>'
        +errorMessage
        +'<erroralert>');
    },
    /* Patse data from inputs, textblocks and file inputs by entering the css selector */
    dataParse: function (selector)
    {
        var inputs = $(selector).length;
        var data = new FormData();

        for (var i = 0; i < inputs; i++)
        {
            var obj = $(selector).eq(i);
            var name = $(obj).attr('name');

            if(obj.attr('type') == 'file'){
                var files = obj[0].files;
                $.each( files, function( key, value ){
                    data.append( key, value );
                });
            } else {
                if(obj.val() !== ""){
                    data.append(name, obj.val());
                } else {
                    if(obj.attr('value') === undefined){
                        data.append(name, obj.text());
                    } else {
                        data.append(name, obj.attr('value'));
                    }
                }
            }
        }
        return data;
    },
    /* Command handler  */
    cmd: function (ac)
    {
        /* multiCommands */
        var acArr = ac.split('->');
        var acNext = false;
        if (acArr.length > 1) {
            ac = acArr[0];
            acArr.splice(0, 1);
            acNext = acArr.join('->');
        }

        var data = this.parseAttr('data', ac);
        var ajax = this.parseAttr('ajax', ac);
        var htmldata = this.parseAttr('html', ac);
        var appendto = this.parseAttr('append', ac);
        var prependto = this.parseAttr('prepend', ac);
        var val = this.parseAttr('val', ac);
        var run = this.parseAttr('run', ac);
        var modal = this.parseAttr('modal', ac);
        var debug = this.parseAttr('debug', ac);
        var type = this.parseAttr('type', ac);
        var clean = this.parseAttr('clean', ac);
        var reload = this.parseAttr('reload', ac);
        var get = this.parseAttr('get', ac);

        if(!type) {
            type = 'post';
        }

        var send = false;

        if (val) {
            val = this.replaceAll("'", '"', val);
            val = JSON.parse('{' + val + '}');
        }

        if (data) {
            send = this.dataParse(data);
        }

       if (val && data) {
            for (i in val){
                send.append(i, val[i]);
            }
        }

        if (val && !data) {
            send = val;
        }

        if (ajax) {
            if(get){
                ajax += location.search;
            }
            var $this = this;
            $.ajax({
                headers: {
                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                },
                type: type,
                url: ajax,
                cache: false,
                beforeSend: function ()
                {
                    $this.preloaderShow();
                },
                data: send,
                processData: false,
                contentType: false,
                error: function (x)
                {
                    console.log(x);
                    $('html').html(x.responseText);
                },
                success: function (html)
                {
                    $this.preloaderHide();
                    if (htmldata) {
                        $(htmldata).html(html);
                    }
                    if(appendto) {
                        $(appendto).append(html);
                    }
                    if(prependto) {
                        $(prependto).prepend(html);
                    }
                    if(modal) {
                        /* For tw.bootstrap modal */
                        $(modal+' .modal-content').html(html);
                        $(modal).modal('show');
                    }
                    if(debug) {
                        console.log(html);
                    }
                }
            });
        } else {
            if (htmldata) {
                /* Value of first key in object 'send' */
                for (var html in send)
                    break;
                $(htmldata).html(send[html]);
            }
        }

        if(run){
            eval(run);
        }

        if(clean){
            $(clean).val('').text('');
        }

        if(reload){
            setTimeout(function(){
                location.reload();
            }, reload*1000);
        }

        if(modal === 'hide'){
            $('.modal').modal('hide');
        }

        /* Next command */
        if(acNext) {
            this.cmd(acNext);
        }
    }
};

var ion = new Ion();
/* Ajax commands */
$(document).on('click', '[ion]', function ()
{
    ion.cmd($(this).attr('ion'));
});

$(window).load(function () {
    showSystemMessages();
});

/* System messages */
function showSystemMessages()
{
    $('#SystemMessages>div')
    .not('.showed')
    .addClass('showed')
    .animate({marginBottom:1000,opasity:0},0)
    .show()
    .animate({marginBottom:5,opasity:1},700)
    .delay(3000)
    .fadeOut(300,function(){
        this.remove();
    });
}
$('#SystemMessages').bind('DOMSubtreeModified',function(){
    showSystemMessages();
    var hiddenCmd = $('ion').text();
    if(hiddenCmd){
        ion.cmd(hiddenCmd);
    }
});
