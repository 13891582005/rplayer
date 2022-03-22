/**
 * @file
 * Web application.
 *
 * @author Robert Rajs
 * @link https://rajs.info/
 */

import ID3Writer from './../foreign/browser-id3-writer-master/src/ID3Writer.js';
export default class RPlayer {
    
    constructor(
        rplayerObj
    ) {
        this.rplayerObj    = rplayerObj;
        this.rplayerCfg    = rplayerObj.rplayerCfg.conf;
   
        this.download      = {};
        this.download.mp3  = [];
        this.downloadIndex = 0;
        this.lyrics        = [];
        this.story         = [];
        
        this.init();

        console.log("[RPlayer]","Downloads module loaded.");
    }

    init() {
        var that = this;

        // Loader
        var int = setInterval(function() {
            if (that.rplayerObj.tracklistLoaded) {
                that.buttons();
                that.checkForm();
                that.tracks();
                that.bundleOptions();
                clearInterval(int);
            }
        },362);
    }

    bundleOptions() {
        $("#rplayerDownloads .rplayerDownloadsBundleOptions").append(
            "<div class=\"ui toggle checkbox\">" +
                "<input type=\"checkbox\" checked=\"checked\" id=\"rplayerCheckboxDownloadBundleOptions_ImagesToMp3\"><label for=\"rplayerCheckboxDownloadBundleOptions_ImagesToMp3\">Include images to mp3 files</label>" +
            "</div>" +
            "<div class=\"ui toggle checkbox\">" +
                "<input type=\"checkbox\" checked=\"checked\" id=\"rplayerCheckboxDownloadBundleOptions_IconsToMp3\"><label for=\"rplayerCheckboxDownloadBundleOptions_IconsToMp3\">Include icons to mp3 files</label>" +
            "</div>" +
            "<div class=\"ui toggle checkbox\">" +
                "<input type=\"checkbox\" checked=\"checked\" id=\"rplayerCheckboxDownloadBundleOptions_LyricsFile\"><label for=\"rplayerCheckboxDownloadBundleOptions_LyricsFile\">Lyrics for songs to separate files</label>" +
            "</div>" +
            "<div class=\"ui toggle checkbox\">" +
                "<input type=\"checkbox\" checked=\"checked\" id=\"rplayerCheckboxDownloadBundleOptions_InfoFile\"><label for=\"rplayerCheckboxDownloadBundleOptions_InfoFile\">Songs informations files</label>" +
            "</div>"
        );
    }

    checkForm() {
        var that = this;
        
        $("#rplayerDownloads form:first-child").on("submit",function() {
            return false;
        });
        $("#rplayerDownloads form:first-child").on("change",function() {
            for (const [key, value] of Object.entries(that.download.mp3)) {
                if ($("#" + value.checkboxId).is(":checked")) {
                    value.download = true;
                } else {
                    value.download = false;
                }
            }
        });
    }

    tracks() {
        var numOfDigits = this.numberGetDigits(Object.keys(this.rplayerCfg.album.tracks).length);

        for (const [key, value] of Object.entries(this.rplayerCfg.album.tracks)) {
            if (value.downloads.mp3) {
                var fileName = this.numberZeroFill((parseInt(key) + 1), numOfDigits) + " - " + value.mediaName + ".mp3";
                var trackNumber = parseInt(key) + 1;
                var checkboxId = "rplayerCheckboxDownloadMp3_" + key;
                $("#rplayerDownloads .rplayerDownloadsTracks").append(
                    "<div class=\"ui toggle checkbox\">" +
                        "<input type=\"checkbox\" checked=\"checked\" id=\"" + checkboxId + "\"><label for=\"" + checkboxId + "\">" + fileName + "</label>" +
                    "</div>"
                );
                var genres = [];
                var commentText = 
                    'This file was generated by RPlayer v' + this.rplayerCfg.app.version + ' (' + this.rplayerCfg.app.date + ') at the URL:\n' +
                    this.rplayerObj.getURLAddress();
                var i = 0;
                for (const [key, value2] of Object.entries(value.info.genres)) {
                    genres[i] = value2;
                    i++;
                }
                this.download.mp3[key] = {
                    mediaName: value.mediaName,
                    trackNumber: trackNumber + "/" + Object.keys(this.rplayerCfg.album.tracks).length,
                    composer: [value.info.composer],
                    genres: genres,
                    label: value.info.label,
                    copyright: value.info.copyright,
                    lang: value.info.lang,
                    fileName: fileName,
                    download: true,
                    srcFile: value.downloads.mp3,
                    srcImgFile: value.info.image,
                    srcIconFile: value.info.icon,
                    checkboxId: checkboxId,
                    storyHtml: this.getTrackStory(value),
                    comment: {
                        description: '',
                        text: 
                            commentText +
                            ((this.rplayerCfg.album.donations !== undefined) ? this.getArtistDonations() : "") +
                            ((value.words !== undefined) ? this.getLyrics(value) : "") +
                            ((this.rplayerCfg.app.donations !== undefined) ? this.getRPlayerDonations() : ""),
                    },
                    isrc: value.info.isrc,
                    bpm: value.info.bpm,
                };
            }
        }
    }

    getTrackStory(song) {
        var storyRet = {};

        storyRet.story    = "";

        storyRet.story += 
        "<body style='font-family: courier'>\n" +
        "\n<h1>" + song.mediaName + "</h1>";

        for (const [key, value] of Object.entries(song.info.anyHtml)) {
            if (value.noDownloadRender === undefined) {
                storyRet.story += "\n<h2>" + value.id + "</h2>";
                storyRet.story += "\n" + value.html;
            }
        }
        storyRet.story += this.getHtmlFooter() + "\n</body>";

        var i = this.story.length;
        
        this.story[i] = {};
        this.story[i].fileName = song.mediaName + ".htm";
        this.story[i].html     = storyRet.story;
    }

    getArtistDonations() {
        var lat    = false;
        var string = "\n\n";

        string += "Donations for artist:\n";
        string += "---------------------\n";

        for (const [key, value] of Object.entries(this.rplayerCfg.album.donations.wallets)) {
            if (lat) {
                string += "\n\n";
            }
            string += value.ccurrency + ":\n";
            string += value.adress;
            lat = true;
        }

        return string;
    }

    getRPlayerDonations() {
        var lat    = false;
        var string = "\n\n";

        string += "Donations for RPlayer:\n";
        string += "----------------------\n";

        for (const [key, value] of Object.entries(this.rplayerCfg.app.donations.wallets)) {
            if (lat) {
                string += "\n\n";
            }
            string += value.ccurrency + ":\n";
            string += value.adress;
            lat = true;
        }

        return string;
    }

    getHtmlFooter() {
        var html =
        "\n<br>" +
        "\n<br>" +
        "\n<div style='border-bottom: 1px solid rgba(0,0,0,.3)'></div>" +
        "\n<br>" +
        "\n<table cellpadding='0' cellspacing='0' style='font-size: 0.8em;'>" +
            "\n<tr>" +
                "\n<th style='text-align: left'>" +
                    "\nAlbum: " +
                "\n</th>" +
                "\n<td style='text-align: left'>" +
                    "\n<a href='" + this.rplayerObj.getURLAddress() + "'>\n" +
                        this.rplayerCfg.album.info.name +
                    "\n</a>" +
                "\n</td>" +
            "\n</tr>" +
            "\n<tr>" +
                "\n<th style='text-align: left'>" +
                    "\nAuthor: " +
                "\n</th>" +
                "\n<td style='text-align: left'>\n" +
                    this.rplayerCfg.album.info.composer +
                "\n</td>" +
            "\n</tr>" +
            "\n<tr>" +
                "\n<th style='text-align: left'>" +
                    "\nYear: " +
                "\n</th>" +
                "\n<td style='text-align: left'>\n" +
                    this.rplayerCfg.album.info.year +
                "\n</td>" +
            "\n</tr>" +
        "\n</table>";

        return html;
    }
    
    getLyrics(value) {
        var words  = value.words;
        var lat    = false;
        var string = "\n\n";
        var html   = "<body style='font-family: courier'>";

        string += "Lyrics:\n";
        string += "-------\n";

        html   += "<h1>" + value.mediaName + "</h1>";

        for (const [key, value2] of Object.entries(words)) {
            if (lat) {
                string += "\n";
                html   += "\n<br>";
            }
            string += value2.replace("<br>","\n");
            html   += value2;
            lat = true;
        }
        html += this.getHtmlFooter() + "</body>";

        var i    = this.lyrics.length;

        this.lyrics[i] = {};
        this.lyrics[i].fileName = value.mediaName + ".htm";
        this.lyrics[i].html     = html;

        return string;
    }

    numberGetDigits(number) {
        return number.toString().length;
    }

    numberZeroFill(num, size) {
        num = num.toString();
        while (num.length < size) num = "0" + num;
        return num;
    }

    buttons() {
        var that = this;

        $(this.rplayerCfg.app.htmlSelectors.mainWindow + " .icon.download").on("click",function() {
            $("#rplayerDownloads").css({
                display: "block"
            });
            $("#rplayerDownloads").stop().animate({
                opacity: "1"
            },250);
        });

        $("#rplayerDownloads .rplayerDownloadsClose").on("click",function() {
            $("#rplayerDownloads").stop().animate({
                opacity: "0"
            },1000,function() {
                $("#rplayerDownloads").css({
                    display: "none"
                });
            });
        });

        $("#rplayerDownloads .button.rplayerDownloadSubmit").on("click",function() {
            that.downloadAction();
        });
    }

    downloadAction() {
        $("#rplayerDownloads .button.rplayerDownloadSubmit").addClass("loading disabled");
        $("#rplayerDownloads input").attr('disabled', 'disabled');
        $(this.rplayerCfg.app.htmlSelectors.mainWindow + " .downloadsButton").css({
            opacity: "0.3"
        });
        this.getMp3Files();
        this.getMp3ImagesFiles();
        this.getMp3IconsFiles();
        this.checkDataAndContinue();
    }

    getMp3Files() {
        for (const [key, value] of Object.entries(this.download.mp3)) {
            this.getMp3FileData(value);
        }
    }

    checkDataAndContinue() {
        var that = this;

        setTimeout(function() {
            var countOfFiles           = that.download.mp3.length - that.numberOfUnwantedFiles();
            var countOfDownloadedFiles = 0;

            for (const [key, value] of Object.entries(that.download.mp3)) {
                if (
                    value.data !== undefined &&
                    value.imgData !== undefined &&
                    value.iconData !== undefined
                ) {
                    countOfDownloadedFiles += 1;
                }
            }

            if (parseInt(countOfDownloadedFiles) != parseInt(countOfFiles)) {
                that.checkDataAndContinue();
            } else {
                that.zipData();
            }
        },6000);
    }

    getMp3ImagesFiles() {
        for (const [key, value] of Object.entries(this.download.mp3)) {
            this.getMp3ImgFileData(value);
        }
    }

    getMp3IconsFiles() {
        for (const [key, value] of Object.entries(this.download.mp3)) {
            this.getMp3IconFileData(value);
        }
    }

    getMp3IconFileData(value) {
        var value;
        var that = this;

        if (!value.iconData && value.download == true) {
            console.log("[RPlayer]","Getting the icon data for the \"" + value.fileName + "\" file.");
            setTimeout(function() {
                $.ajax({
                    type: "GET",
                    url: value.srcIconFile,
                    xhrFields:{
                        responseType: 'arraybuffer'
                    },
                    error: function(jqXHR, textStatus, errorThrown){
                        that.getMp3IconFileData(value);
                        console.log("[RPlayer]","I'm trying to get the icon data for the \"" + value.fileName + "\" file again.");
                    },
                    success: function(data) {
                        value.iconData = data;
                        console.log("[RPlayer]","I got the icon data for the \"" + value.fileName + "\" file.");
                    }
                });
            },6000);
        }
    }
    
    getMp3ImgFileData(value) {
        var value;
        var that = this;

        if (!value.imgData && value.download == true) {
            console.log("[RPlayer]","Getting the image data for the \"" + value.fileName + "\" file.");
            setTimeout(function() {
                $.ajax({
                    type: "GET",
                    url: value.srcImgFile,
                    xhrFields:{
                        responseType: 'arraybuffer'
                    },
                    error: function(jqXHR, textStatus, errorThrown) {
                        that.getMp3ImgFileData(value);
                        console.log("[RPlayer]","I'm trying to get the image data for the \"" + value.fileName + "\" file again.");
                    },
                    success: function(data) {
                        value.imgData = data;
                        console.log("[RPlayer]","I got the image data for the \"" + value.fileName + "\" file.");
                    }
                });
            },6000);
        }
    }

    numberOfUnwantedFiles() {
        var numOfUnwanteds = 0;
        
        for (const [key, value] of Object.entries(this.download.mp3)) {
            if (value.download == false) {
                numOfUnwanteds += 1;
                delete value.data;
            }
        }

        return numOfUnwanteds;
    }

    zipData() {
        var zip = new JSZip();
        
        console.log("[RPlayer]","Adding data to ZIP archive.");
        var baseFolderName = this.rplayerCfg.album.info.composer + " - " + this.rplayerCfg.album.info.year + " - " + this.rplayerCfg.album.info.name;
        
        // ZIP mp3
        for (const [key, value] of Object.entries(this.download.mp3)) {
            if (value.data) {
                zip.folder(baseFolderName).file(value.fileName,this.putID3(value));
            }
        }

        // ZIP Lyrics
        for (const [key, value] of Object.entries(this.lyrics)) {
            if ($("#rplayerDownloads #rplayerCheckboxDownloadBundleOptions_LyricsFile").is(":checked")) {
                zip.folder(baseFolderName).folder("lyrics").file(value.fileName,value.html);
            }
        }

        // ZIP Info
        for (const [key, value] of Object.entries(this.story)) {
            if ($("#rplayerDownloads #rplayerCheckboxDownloadBundleOptions_InfoFile").is(":checked")) {
                zip.folder(baseFolderName).folder("info").file(value.fileName,value.html);
            }
        }

        var that = this;
        zip.generateAsync({type:"blob"}).then(function (blob) {
            saveAs(blob, baseFolderName + ".zip");
            $("#rplayerDownloads .button.rplayerDownloadSubmit").removeClass("loading disabled");
            $("#rplayerDownloads input").removeAttr('disabled');    
            $(that.rplayerCfg.app.htmlSelectors.mainWindow + " .downloadsButton").css({
                opacity: "1"
            });
        });
    }

    putID3(song) {
        var song;
        const writer = new ID3Writer(song.data);
        writer
            .setFrame('TRCK', song.trackNumber)
            .setFrame('COMM', song.comment)
            .setFrame('TIT2', song.mediaName)
            .setFrame('TPE1', [this.rplayerCfg.album.info.composer])
            .setFrame('TALB', this.rplayerCfg.album.info.name)
            .setFrame('TPE2', this.rplayerCfg.album.info.composer)
            .setFrame('TCON', song.genres)
            .setFrame('TPUB', song.label)
            .setFrame('TCOP', song.copyright)
            .setFrame('TLAN', song.lang)
            .setFrame('TBPM', song.bpm)
            .setFrame('TSRC', song.isrc)
            .setFrame('TYER', this.rplayerCfg.album.info.year);

        if ($("#rplayerCheckboxDownloadBundleOptions_ImagesToMp3").is(":checked")) {
            writer.setFrame('APIC', {
                type: 3,
                data: song.imgData,
                description: ''
            });
        }

        if ($("#rplayerCheckboxDownloadBundleOptions_IconsToMp3").is(":checked")) {
            writer.setFrame('APIC', {
                type: 1,
                data: song.iconData,
                description: ''
            });
        }

        writer.addTag();
        return writer.arrayBuffer;
    }

    getMp3FileData(value) {
        var value;
        var that = this;

        if (!value.data && value.download == true) {
            console.log("[RPlayer]","Getting the data of the \"" + value.fileName + "\" file.");
            setTimeout(function() {
                $.ajax({
                    type: "GET",
                    url: value.srcFile,
                    xhrFields:{
                        responseType: 'arraybuffer'
                    },
                    error: function(jqXHR, textStatus, errorThrown){
                        that.getMp3FileData(value);
                        console.log("[RPlayer]","I'm trying to get the data for the file \"" + value.fileName + "\" again.");
                    },
                    success: function(data) {
                        // value.data = new Uint8Array;
                        value.data = data;
                        console.log("[RPlayer]","I got the data for the file \"" + value.fileName + "\".");
                    }
                });
            },6000);
        }
    }
}
