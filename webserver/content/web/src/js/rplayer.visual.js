/**
 * @file
 * Visual component for web application rplayer.js.
 *
 * @author Robert Rajs
 * @link https://rajs.info/
 */

 export default class RPlayerVisual {
    constructor(rplayerObj) {
        // this.rplayerSelector = rplayerSelector;
        this.rplayerObj = rplayerObj;
        // console.log("Objekt RPlayeru",this.rplayerObj);
        // design config
        this.fadeoutTime = 789;
        this.fadeinTime  = 1789;

        this.init();
        console.log("[RPlayer]","Visual module loaded.")
    }

    init() {
        var that = this;
        
        this.ticker = new Array;
        this.timerSecs = 0;

        this.mainWindowSel = that.rplayerObj.rplayerCfg.conf.app.htmlSelectors.mainWindow;

        // this.motion3d();

        this.ticker["checkFirstLoading"] = setInterval(function() {
            that.dimmerFullscreen()
        },this.fadeoutTime * 1.2);
        this.ticker["stopTimer"] = setInterval(function() {
            that.tickStopTimer()
        },1000);
        this.seekersInfo();
        this.windowMinimize();
        this.fullscreen();
    }

    /**
	 * Fullscreen
	 */
	fullscreen() {
        $(".fullScreen").on("click",function() {
            if ($.fullscreen.isFullScreen()) {
                $.fullscreen.exit();
            } else {
                $("body").fullscreen();
                $("body").css({
                    overflow: "auto"
                });
            }
        });
	}

    tickStopTimer() {
        
        try {
            if (this.rplayerObj.audioObject.paused == false) {
                var inputNumber = parseInt($(".itemB input").val());
                if (inputNumber >= 0) {
                    this.timerSecs -= 1;
                }
        
                if (
                    this.timerSecs == -1 &&
                    inputNumber != 0
                ) {
                    this.timerSecs = 59;
                    var newInputNumber = inputNumber - 1;
                    $(".itemB input").val(newInputNumber.toString());
                }
        
                if (
                    this.timerSecs == -1 &&
                    inputNumber == 0
                ) {
                    this.timerSecs = 0;
                    var newInputNumber = inputNumber;
                    $(".itemB input").val("");
                    $(".rplayerStopAfterTrack").prop("checked",true);
                }
                
                if($(".stopTimerSecs").html() != this.zeroFill(this.timerSecs)) {
                    $(".stopTimerSecs").html(this.zeroFill(this.timerSecs));
                }
            }
        } catch (err) {
            console.log("[NOTICE] Waiting...");
        }
        
    }

    zeroFill(number) {
        if (number < 10) {
            return "0" + number;
        } else {
            return number;
        }
    }

    windowMinimize() {
        var that = this;
        $(".rplayerMinimize").on("click",function() {
            $(that.mainWindowSel).stop().transit({
                transform: "perspective(50em) scale(0.9) rotateX(0deg) rotateY(-1deg) rotateZ(-1deg) translateX(-1em)",
                opacity: 0
            },that.fadeoutTime,function() {
                $(that.mainWindowSel).css({
                    display: "none"
                });
            });
            $("#rajs").stop().transit({
                opacity: "0"
            },that.fadeoutTime,function() {
                $("#rajs").css({
                    display: "none"
                });
            });
        });
        $("body").on("click",function() {
            if ($(that.mainWindowSel).css("opacity") == "0") {
                $("#rajs").css({
                    display: "block"
                });
                $(that.mainWindowSel).css({
                    display: "grid"
                });
                $("#rajs").stop().transit({
                    opacity: "1"
                },that.fadeoutTime);
                $(that.mainWindowSel).stop().transit({
                    opacity: "1",
                    transform: "scale(1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) translateX(0)"
                },that.fadeoutTime);
            }
        })
    }

    dimmerFullscreen() {
        if ($(".rplayerTrackList").html().length > 0) {
            clearInterval(this.ticker["checkFirstLoading"]);
            
            // scroll top
            $('html, body').animate({
                scrollTop: top
            },500);

            $(".FullscreenDimmer").stop().animate({
                opacity: 0
            },this.fadeoutTime,function() {
                $(".FullscreenDimmer").css({
                    display: "none"
                });
            });

            $(".rplayerFx").stop().animate({
                opacity: "1"
            },this.fadeinTime);
            
            $("#rplayer").stop().transit({
                opacity: "1",
                transform: "scale(1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) translateX(0)"
            },this.fadeinTime);
            
            var that = this;
            var visualOn = false;
            $(".rplayerTransport").on("click",function() {
                if (!visualOn) {
                    that.visualisation();
                    visualOn = true;
                }
            });
        }
        // console.log($(".rplayerTrackList").html());
    }

    seekersInfo() {
        var lastVolume = false; // fix for online translator ;-)
        this.infoInterval = setInterval(function() {
            // console.log(volumeTggleData);
            var volumeTggleData = Math.round($(".rplayerVolFader").val() / 10) / 1000 + "%";
            var pointPosition = volumeTggleData.indexOf(".");
            
            if (pointPosition != 0) {
                var output = [volumeTggleData.slice(0, pointPosition), "<span style=\"font-size: .7em; opacity: .7\">", volumeTggleData.slice(pointPosition)].join('');
                var percPosition  = output.indexOf("%");
                var output = [output.slice(0, percPosition), "</span> ", output.slice(percPosition)].join('');
            } else {
                var output = volumeTggleData;
            }
            
            if ($(".rplayerVolFader").val() != lastVolume) {
                $(".volumeInfo").html(output);
                lastVolume = $(".rplayerVolFader").val();
            }

            // seeker
            var seekerPosition = Math.ceil($(".rplayerSeeker").val() - $(".rplayerSeeker").attr("min"));
            // console.log(seekerPosition);

            var sMin = Math.floor(seekerPosition / 60);
            var sSec = seekerPosition - (sMin * 60);

            if (sSec < 10) {
                sSec = 0 + sSec.toString()
            }
            
            var seekerInfoOutput = sMin + ":" + sSec;

            if ($(".rplayerSeeker").attr("data-content") != seekerInfoOutput) {
                // console.log([$(".rplayerSeeker").attr("data-content"),seekerInfoOutput]);
                $(".rplayerSeeker").attr("data-content",seekerInfoOutput);
                $(".popup").html(seekerInfoOutput);
            }
        },100);
    }

    visualisation() {
        var audio = this.rplayerObj.audioObject;

        var context = new AudioContext();
        var src = context.createMediaElementSource(audio);
        var analyser = context.createAnalyser();

        var canvas = document.getElementById("rplayerVisualCanvas");
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        var ctx = canvas.getContext("2d");

        src.connect(analyser);
        analyser.connect(context.destination);

        analyser.fftSize = 256;

        var bufferLength = analyser.frequencyBinCount;
        // console.log(bufferLength);

        var dataArray = new Uint8Array(bufferLength);

        var WIDTH = canvas.width;
        var HEIGHT = canvas.height;

        var barWidth = (WIDTH / bufferLength) * 2.5;
        var barHeight;
        var x = 0;

        function renderFrame() {
            requestAnimationFrame(renderFrame);

            x = 0;

            analyser.getByteFrequencyData(dataArray);

            ctx.fillStyle = "#fff";
            ctx.fillRect(0, 0, WIDTH, HEIGHT);

            for (var i = 0; i < bufferLength; i++) {
                barHeight = (dataArray[i] * (dataArray[i] / 2)) / 50;
                // barHeight = dataArray[i];

                var r = 155; // barHeight + (25 * (i/bufferLength));
                var g = 255; // * (i/bufferLength);
                var b = /* 5 */ 0;

                //     ctx.fillStyle = "rgb(" + r + "," + g + "," + b + ")";
                ctx.fillStyle = "#1e70bf";
                ctx.fillRect(x, HEIGHT - (barHeight), barWidth, barHeight);

                x += barWidth + 1;
            }
        }

        renderFrame();
    }

    motion3d() {
        var framerate = 30;
        var scale = 0.9;
        var i = 0;

        var shakingBrutality = .1;

        this.motion3dTicker = setInterval(function() {
            // console.log("ahoj");

            $("#rplayer").css({
                transform: "perspective(5em) rotateX(" + (Math.sin(i / 222) * -4 * shakingBrutality) + "deg) rotateY(" + (Math.sin(i / 126) * -4 * shakingBrutality) + "deg) rotateZ(" + (Math.sin(i / 635) * -16 * shakingBrutality) + "deg)"
            });

            i++;
        }, 1000 / framerate);
    }
}
