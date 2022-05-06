/**
 * @file Configuration for RPlayer web application
 * @copyright Robert Rajs 2022
 * @author Robert Rajs
 * @see {@link https://rajs.info|Home}
 * @see {@link https://zesilovac.cz|Zesilovač}
 * @see {@link https://bandzone.cz/rajs|Bandzone}
 * @see {@link https://technotramp.com|Technotramp}
 * @see {@link https://github.com/entlaabstudio/rplayer|GitHub}
 * @see {@link https://cs-cz.facebook.com/robert.rajs.9|Facebook}
 * @license
 * Copyright (c) 2022 Robert Rajs
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 * @description
 * Don´t use apostrophe in HTML. You just put \".
 * {base_url} prints the base URL almost anywhere.
 * Insert images into HTML as base64.
 */

export default class RPlayerConf {
    constructor() {
        
        console.log("[RPlayer]","Config loaded.");

        this.conf = {
            configVersion: 1,
            description: "Yatsu v1 MIDI experimental v1",
            app: {
                name: "RPlayer",
                version: "1.42.66", // <some platform updates>.<visible or control updates>.<unvisible updates>
                date: "2022",
                web3Protocol: "ipfs://",
                rplayerIndex: "rplayer.htm",
                preferences: {
                    transport: {
                        stepTime: .5 // [s]
                    },
                    words: {
                        timeToConsole: false,
                        titleMaxTime:  7000 // [ms]
                    },
                    design: {
                        backgroundImage: "url('./media/images/dreamer_album.jpg')",
                        favicon: "./favicon.ico",
                    },
                    cssTimeModyfier: {
                        consoleLog: false
                    }
                },
                localization: {
                    lang: "en",
                    phrases: {
                        // modules.visual
                        "author"                      : "Author",
                        "album"                       : "Album",
                        "albumBuffer"                 : "Album buffer",
                        "albumDuration"               : "Album duration",
                        "loading"                     : "loading...",
                        "stopAfterTrack"              : "Stop after track",
                        "loopAll"                     : "Loop all",
                        "stopTimer"                   : "Stop timer",
                        "minutes"                     : "Minutes...",
                        "helpThisIsRplayer"           : "This is RPlayer...",
                        "helpKeySpace"                : "[SPACE]",
                        "helpKeyUp"                   : "[UP]",
                        "helpKeyDown"                 : "[DOWN]",
                        "helpKeyLeft"                 : "[LEFT]",
                        "helpKeyRight"                : "[RIGHT]",
                        "helpKeyCtrl"                 : "[CTRL]",
                        "helpKeyEnter"                : "[ENTER]",
                        "helpKeyS"                    : "[S]",
                        "helpKeyL"                    : "[L]",
                        "helpKeyT"                    : "[T]",
                        "helpPlayPause"               : "Play / Pause",
                        "helpPreviousTrack"           : "Previous track / start current track",
                        "helpNextTrack"               : "Next track",
                        "helpRewind"                  : "Rewind",
                        "helpForward"                 : "Forward",
                        "helpSlideshow"               : "Slideshow mode",
                        "helpFullscreen"              : "Fullscreen mode",
                        "helpStopAfterTrack"          : "Stop after track",
                        "helpLoopAll"                 : "Loop all",
                        "helpLyrics"                  : "Show / hide lyrics",
                        "helpBluetooth"               : "All standard bluetooth commands",
                        "byRobertRajs"                : "by Robert Rajs",
                        // modules.info
                        "infoAlbumName"               : "Album name",
                        "infoAlbumYear"               : "Album year",
                        "infoAlbumComposer"           : "Album composer",
                        "infoTrackComposer"           : "Track composer",
                        "infoTrackYear"               : "Track year",
                        "infoLyrics"                  : "Lyrics",
                        "infoReward"                  : "Reward for artist",
                        // modules.downloads
                        "downloadsHeader"             : "RPlayer download manager",
                        "downloadsTracks"             : "Tracks",
                        "downloadsBundleOptions"      : "Bundle options",
                        "downloadsInfoText"           : "After clicking the download button, you can close the download manager and continue using RPlayer. The download will start automatically.",
                        "downloadsButtonDownload"     : "Download",
                        "downloadsButtonClose"        : "Close",
                        "downloadsAttachmentsFor"     : "Attachments for",
                        "downloadsAttachmentsUnsorted": "Unsorted attachments",
                        "downloadsAlbumInfoHead"      : "Album information",
                        "downloadsAlbum"              : "Album",
                        "downloadsAuthor"             : "Author",
                        "downloadsYear"               : "Year",
                        "downloadsDuration"           : "Duration",
                        "downloadsLabel"              : "Label",
                        "downloadsCopyright"          : "Copyright",
                        "downloadsTracklist"          : "Tracklist",
                        "downloadsGeneratedByRplayer" : "Generated by RPlayer",
                        "downloadsAtTheUrl"           : "at the URL",
                        "downloadsRewardInfo"         : "Reward options for author of the music or author of the RPlayer are available under this link.",
                        "downloadsInformation"        : "information",
                        "downloadsLyrics"             : "lyrics",
                        "downloadsIsrcCode"           : "ISRC code",
                        "downloadsLyricsID3"          : "Lyrics",
                        "downloadsLyricsID3U"         : "-------",
                        "downloadsDonatRPID3"         : "Donations for RPlayer",
                        "downloadsDonatRPID3U"        : "----------------------",
                        "downloadsDonatArtID3"        : "Donations for artist",
                        "downloadsDonatArtID3U"       : "---------------------",
                        "downloadsArtUrlsID3"         : "URLs",
                        "downloadsArtUrlsID3U"        : "----",
                        "downloadsTrackDetail"        : "track detail",
                        "downloadsImagesToMp3"        : "Include images to mp3 files",
                        "downloadsIconsToMp3"         : "Include icons to mp3 files",
                        "downloadsLyricsFiles"        : "Songs lyrics files",
                        "downloadsInfoFiles"          : "Songs informations files",
                        "downloadsInfoWebsite"        : "Album informations website",
                        "downloadsCoverImage"         : "Cover image to root directory",
                        "downloadsTracksImages"       : "Tracks images files",
                        "downloadsSlshowImages"       : "Slideshow images files",
                        "downloadsArtUrls"            : "URLs",
                    },
                },
                donations: {
                    html: "<p>Do you want to help me create a decentralized ecosystem around this freedom media player without intermediaries? RPlayer specializes in listening to music albums and its main priority is longevity and the content itself, which is unchangeable after release, similar to an analog medium. Please contribute to this project. Thank you for listening to good music, my friend. If you are using an IPFS node, please pin it to local. <span style=\"white-space: nowrap;\"><i class=\"smile outline icon\"></i><i class=\"thumbs up icon\"></i></span></p>",
                    securityPhrase: "Never send rewards if you have obtained a link to the RPlayer from unverified sources. The correct Web3 URL is a guarantee of the correct addresses for sending rewards.",
                    wallets: {
                        0: {
                            ccurrency: "Bitcoin",
                            image: "data:image/png;base64,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",
                            adress: "bc1qzdnut85hrms8jdjvvk5nxhtddyhpmzcx9vzz3c",
                        },
                        1: {
                            ccurrency: "Ethereum",
                            image: "data:image/png;base64,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",
                            adress: "0xE756c458BDf4Dc01792073f74ad148894a3A33f0"
                        },
                        3: {
                            ccurrency: "Cardano",
                            image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPoAAAD6CAYAAACI7Fo9AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AACZE0lEQVR4AezBedSn51nY9+913/fz/LZ3n3fmnV0zI2k0kmXtkmVbXuSFg9mcEgOHpW0g50A4Tf6CHlrcLeGUhJaEpifQ0p6klGJCCIshZgk22MaWJcuStVirNZp9e/fltz3LfV9Xz8xAXVqPLcl+x5l3fp+PmBkjIyNbm2NkZGTLc4yMjGx5jpGRkS3PMTIysuU5RkZGtjzHyMjIlhcYuS7820fPZ8AE0OCyEtj4vrfuqhnZ8gIj14WljboD3Azs4LIF4CVgjZEtT8yMka3nlz92PAOmFteK2YXV4fZS5Qbns1sQ2cFFZgua6pcbzk7umG4ubJ9sLANr/9l331gzsuUERrakfmltww6XkXtqlft6Q72lV1VzdWIMIPP0xnKbdy33chnliV4lXxR4DlhnZMsJjGxJwyjTK714f3fA+5b7/khvKDuHNc06iQfIvE0XNdsL9dujD9sKfOPAruYS0AcSYIxsGYGRLWV+6YKbmw55r4h7l3v69vWBvWNhw7U2hs4ZzhnCRYI5GWpzIrp9ycsOdeiOUl+cL4uVfqFrhybbNSNbRmBkS/nvf/2llsMOz1ed+1bq9sFe6Sb6lVElwXAGTrlERVDfK9X7XsxSivuzuHbXr3zk1KqZfOkf/d0Haq59AghggHEdC1yH/tWfflkeefq89AaVS8nIMs/MtklmpsfZPtPSOw5P2btvmjCuQcvr1RhwbzeV71iqGjv70aHJcGKmhhmOiwQ1J0qdTJb7RlnG2TDs3VeuFosGrwJdrkG/+Zfn5Tc/flZu2dfx3/nWudbMeNbsDavy33/uxOBzzy6k7/v2N7F927j97QemjetI4DrUFMsk1TdkkvZ5p3lwaCOk0Mq1mmhy+o497XPAEIhcYyI+B/apyaGkMl4nQTAQABMxMwDBBAwzSElIjrGo3FCp221GzrXJ3bZvvHXHgc6BlW515COfODWnaJ7KYo1qcO7emyfnpzvZ0p5tnbU/emJl8J33zRjXicB15Lc+c9rt37uteb7PzujytxYqD6pqJ0shDqrQ7Baut9Szxz778vrjO2ebZx7Y21nnGqPivQhtnB/zzmXeCWqCoQgKqHCJIVwkeBfwjlycHzfnO2Z4rjEffeycTEw020fPDPYOoryrSO67+mU8UNTJk3ShgXu5H/2LF9bK52tZf6muqtNA4joRuI7UifZvffLsvev99K6FunNPt6oPmrpG0FzX11r5YpUPpjbqyQtLF6Zyr3/+O0m+9D/82O3GNcShilFhWpqRDAEDwQAFiRggKJhhODDBjIRZKaaVgHKNmZ4IzU8+O3/rWs/evdAL71jrt+4c1mlHnWpJyW/3ks2kQTjAhd6hiY1huH1/exnocp0IXAf+4PNn5INv2R66Q53tDuxdG0P3Y93Y2L1UZ8ksc0FzpMpcYyD1jk41VxXVtsynU7njRaDmGuI01mDnxLKTTpjxwpgimAkmholyiRkGiIBz4ISumJ50Wp8DqbmmVOH80nByrZfuXhvY964V2a3z/bxVRrwRiOonRELbl3pT3o03xaTzG/30HFB89LEz8W89uNfY4gLXgRPzlXz0kbPTqz0O9oqwf23Atn7pszqlzAAlgYIqvhe0FZw/1Mrk5rl2vf9//LXPnfvP/87bhlwrLHUF+3xwkk8101SemFkfSqOIXgxBEEAwATOl6WGyWZftkI4Hk0+Ipc8b0uUa8i//4IX26XU3t9Lz+9cLv79X2uQw1lRJEUkkNe/F+6L2dAu2Zd7dsLCuN/2fHz8xXNhIi4CxxQWuA/1CZX5dp4vKH+hX+exqX9ywTqCVIrWY1WCg6hhGIdRh3Lu0R6hv6FXSBYZcI/71z32gBzzxI7/weDHh46GN0uaqFHbW5tsGOAQRx0UmQitPg+2dOD/RSF+0lH/8N37mO57jGnN6cdhaLbLt3UFner0Meb9KRC3NSGCGWADLKGsnvdK5ds72srIDy936bL9kietA4DoQk1HWlsdkbVVpRPWS1MAEQU2sFsxAHGo5STNvRsOgqUbgGjQ7Ec4BfyIiwyrxvk7QI3XShpo5EcGJaPBStDOOTrXkU9Nt+SSEC1yDYjKvanlSQkziVA2xGtGEiGDmURxlzOiXXqqWZhAbzmlwIlwPAtcBNTCjNqMUtPIO86JEMQQTMQUBEcMJiKAiVE6kDJ7ENehnf/iWNYNP/tLvnFnOpGoPquT6VRqvUspAyL2rO3nothvuse2T+UcfenPnaUF6XIMyL8k7KZ2jDk6TF8UBBogJIBhiZk7UxJK5Injpt3LKQSVcDwLXgU7T2dx0trI6iMcabrA4npmaQqxxyQwjmJNMnAsESWRSpMyxNj2RL968Ix9wDdox0VFguL5RvpI7/kADz9ZJG2bmwcg9qRm0bHl3opP7F77r/v1rXKP272wPWJHF5SotqaVeUtk+qJuoqQiGE0/mTTqNkrEm2mnIUjP3J3ZO5atlUuM6ELgOHN7TsA++Ze/qv/jYq6+2wuCV8VxP1ur2V+pDgtyLF0dDMx/qhh/Elq/ONTM5e8sN2+Z/8F0HBlzDds621s4tFZ+KymeSCsmEi6IKtQq1ockscg370e+6Y/jbf3lqfmWwehy1o0WdNzKXTSbTXEiaCdLOok63lKlOmh9vy4lt4+PHP/i2A6t/+PhZ4zoQuA588C17DagnO7I82eIzZqYpVfdmcJsLYZ8PoWNxsO5Uzk617fTMeP7cRNu9sH26tQEkrmH/7Y/crIACNVuWpJ2zrY2pzsZTKcWsX1QPVll1Z3Q6Dhq9mG8EqSYb/uSOqfyZiY5/dGLMLQPxex7Yw/UgcB1phDD4if/olqc+9fipc8+8OH+m73TNNdt3utxtS+XwnFTF87smx58/fGjuxcnx5isLa1XByLXA1ntV8cMfuOnlzz55bql85vxyqMquepsCaoPgnQy3tzpPv/W2XV+4/ciOU2fPrg24jgSuI9//jv0KDI++HM49l8rPt7xfaI/5x7JmmCj71UqZ6rOdLM3v295a3j03tXHv/mCMXBO++4G9BpT1zVOLX3j6xBdzqZbM0RRE1cyJSN2S+sI9u5vnbpn2gzdPb1OuI4Hr0Pe99+bq+3/6j4///E+/+9QH3n6w3WmFfL1XFb/1py8P//ypRT14aC/ffX8wRq45bzq0rVaXnarNzqgZApiBN6Ek2Msrtd1yA8Z1RsyM65wAAhhgjIxsQYERA4yRkS3MMTIysuU5RkZGtjzHyMjIlucYGRnZ8hwjIyNbnmNkZGTLc4yMjGx5gZHXS37nk6/654+v5mUdgwAiYGY0M59uOzhT/e2Hb4qAMfJGyO989kx2cqFsV8naKrRUU6oHRTfXcnjfrTPVt7/1pgQYI69ZYOT1ECA0G9kYInNRZVwABDBIyACxBYgbEGpAGXkdSgcxc2IzahxMyo3mOKDKMBnPKnLCeVuCYQ80QkcZeU3EzBj52n7p9497gVapOl2b7d7oxz2La/WuQaETmsAQcJ48k/7UmM2Pt+RcM7gz7TwsA4Of+dBNkZEr+uWPHfdmtJf7um2jsH1FrTfU0Q4pdpMIB5PasCzqZ1COjTWbi51mdnaqY2dnJ1hJyvAffPehxMjXFBj5ugxriMiB7jDevdgt39Ut7Lb1oR8blJmPEVHzhg/SamisKYZV1Fem29lnmoEnReRloMvIFaVkbYWbBqXeu9zVh3ulHhlU1hnU1imitTFLuZeDLe8Gg8oG42V6oZHxqaTyVFKOAQNGvqbAyNcVzcbWetUda/343tV+esdGwaF+6SlqR0yCmUBQIglnikbbY4k8Rfz0hB9+4sXl46oU3/ambcrI/5erTLbNrxT3rvT1vWsDe6hXsndYQb+Cfm2ICJ1MtqcAsU6opR2NDXxd49A4+PCvPHI2Slb/wk8+oIx8VYGRr0UAV6a0Y6lXPbg+SO9e2NC5tYEQFZIKag5DQWvKuqYYJvq5m61reSgl8vExBourpZpxEhgw8v8WgE5tcmhxPb57pR/ftTSwbf1KiMmTzGMIZsKwFKoqEaSmjLZbkPcMS8JYltazZpZU5QJQMvJVBUau6Gd++ZE897b73CC/Y6XM3tSt2L8+RPolplxmhiGGWC1KpDZBk2uIyS6zdHtjuTyfqo0NYJG37x7wrSWAcJkBxrfQr336fEvgyEo3PbA6lNtXB+zqDo2ixgwBEXAICLWJ1QYOBbTpndtXR7tD83g21bGvJqtAychXFRi5orOLg7YTu2cjpocXqrCvVwepknCROAQMVBEUwRDA8JQpsDx01Cluc9p/oN+tFoAngSW+dTzQAAKXRaAEEt8iJ872J4G3b/T1faul371cGCklEAAHCKJqiIE4QQTUWRlhZSDUddrjNT5kMS2q8SywwchXFRi5IvNZbmIHLGW31imbGcYMLAIJAQxFRBBTBDA8RkA1s2SBKmkrJnbGZNtBMq6i/+WPjmXA+Ea/nljZKMbKGKZwrVnEdwBiXfb6G0sLwYbr+/du72+fnegC3b/3gQM1V8lGv2oA+4tSDlUxjFfJAxUiBiZ8dY5kjpTEGt46Sdmd1LarERi5osDIFYVm2ws2lbt8No+tVkiBlErMDBQTDDAQUHEYDiyYSJDgM2lkSN7IrZGbGcLV1CusBdw8rO1IpXKgV+jBXlkfqlOaQUBStShRXxnL/fGi5kyvsC8DLwI1V0l3UAjgh2UexBoSnCcZmEUBMYzLDDAMBHAgDu8ycU5MpFAwBTFGrigwckVJTZxYrmZNwIs4EAcImAEKIhhgeDDHJWIgijjDO4fznqvln/z+0aYT9q4M7ZbVnt3TL+zWQcmeorLdVZ12qVoHBMy6pDDXT+FQueIuLJbx0HiDXf/Nb7zyksHJn/uRm4dssjoqgE9JPYaICJgAAghgfIXx1wQH4hHxgAAYwsjXEBi5oqqqzGGpjpJSqs3wmBiGiKCGKSaC4RBzYAKoCLUohlrCUAMM46qook0JvLes7f1LXT2y2LUd3UoaVW0ZqrlgXGRGG8v357Xs6iH1Nk33Zc69peH5M4PfBoZsMuESQ8yMhJkAxv+fIRh/kwEGYFxkjHwNgZErslibYcOUXC9qXUf1TTMDBDAEMARwXCKKmIIpqkZMiVhHX7voMTbVh3/5Ede0Mp8P2/dFye7pFTywNrAdG0NrDGuhToaYmoBxiTnwnYRAAZnXqZZP07FmI/d8+cP/6vmUjJV/8nffVLNJUl0lYGCJnnf1VPCWa0qYqQEIFxlgmBggiDkUwJSkWqPaF6dDMTFGrigwckXOUvRiK2Lpglq9w/BjZk7EMC4RUI+IYKIICiiYIAqWosZY17XEGjA2US1Zbj7s6/XjbYul3NQrZa47IB9Whhp4xBBFMC4yBHCWVGRQGWKaWUozw5bdOjvm39MI3szsUWCNTVIXw1pgQU3P5z5sa+bWSaWRVHEYAhgOE0AUQ8A8FxkJtdjH0gVvcUVMIiNXFBi5onbuCi/2YuXc7nFnO12MOweFp6oRQwwEw2MAkoAEZpJ7oZV7xhtuud0MT4zl9iVgwCbq1q7lhduraA/2BmnfRin5sBaiiokIIoITx18TAzXBMItqDKOKDDVgtjtzdn+M6bwZT7GJctE+2DMNx8yY02mTODWsJKiZiKlhgiGAAQoIRpLcQ7sBY5lbaAb/RDvIi8lcwcgVBUau6J4js8PJJs88edZC1rc3bRR6ZEEtj1HMEMCBORMMMBEUJ2bNzMm2cZju5Kdu2N7+k7sOZn9pxhqbqIjSFuHOqPb2OurOYSUkBLwDRMCDeByOi9QMNBkkEKU26NdiTmwq93qkqu1ZERpsovfft7PrHJ///IkY1wa2H3THunczhZALgiCAA1GEixKAtTNk+5hP463s1Fxn8tNv3dd6enUoQ0auKDByRf/gQ3cmYHnxD4+9IovDRzMfJ8uivpnEttqyPIEzVLhIPMGZNVysx3JbHc/15HiDz+yaaT71Qw/tPQ2UbKJBrUFge1G73bVKJ5kzFUQwDDNBBQNDucwMUQwFMcywqI6kEsyYyoLs3ru9efCRV5ZXTy6U/R96++7EN9mPfOebI7D+xK8+/dJYwz6REK3x93Ua7B+U2owRZxgICI4gaNNTjrdYnh1zxyc6/nP7to+98sPfuW8FEEauKDDytRjAWDNfvnlP/qkz891hPRi+JzO7c2B+tsZaRkIQINDwvpzMbbWTpReaWf3JJumxlRU9CQzZZEVlIhCqZJniHc4jKKCAYqamZgiXGWAiIMJlAggiDnFeGrmbmRzLDp+cHy4OSzsGDNkkbz44vtwr4p9dWGdptkRX+ubPb6SdvdLagnGZpxX8YDq3ham2e2bnbPbp7dPNxzPPMpcZI1cUGPm6bt49OWxk/tVqMKwWfFqLDXmhGfwNSdx0HZOAc5l3vpVJbyLPzrSDvRQsfTGjOB67ww2ugsyLiVhdm6u880kkeNPEJQKIYRiYcpGJAxFAwByYYAi1eYbqfWmuaeLGTa0N5thEP/ptN5bA+V/941NPz69VTUNPFCp7mg2bcliOSAAsw1bHfTox0eSlPVPh+dsPdU7XUYeMfF2Bka9rpVvGLPi1QaW97jAe3bljembHtombYtIdy6s9p5bC9KTk4518Y6bTPDbV4vzi6mD9C89dGKZkiauglYs6kVJxw1D6CYf3Zvw1QQwTzES4TBC8iAkYZioYzmpzMkgi/ShaK1Vw1E4wNlm/3LBeUV/oF+lPd8w0Hz20P59TtZmySOOarAGQki2sd8ujGxvFSr+yemmjjjFZYuTrCox8XR9666wB8YP3T0e4pfjksyulQbm2MThxDJOY1M/NSZic8MPZicbiO2+d7QPK9xzmaimjOcHyKmojpeRRQUwxLjFwYIKBAQgIIoYBZggGmDgiAUuodDXl89Nj2So9TWyyTmPCfup7J2qgBobA2tnlonV8ftgalCkTMGAAnZX33z1bMfK6BEZet7OrdQ0sdftpZb0Qkgr5wMRl6K7poIBxlZXRRCCrkuYp1U7VzDAEwcyBAXjDhEvEDFMBQ1BMDEciF7UxH4ctsWWinfq2u/YtPvnqeuQqeurCIKkyWF2viqXVaq2sVIRLFEiMvG6BkdftR941Z0DkPyAzY3kSYWOjYHWlsGYiNkFwIgYGCGJRRDAuE8S4yAAzFTDyQJxqu8FUW9YxXYVscO+Ns8JVdPfOtgHG7rYy8k0RuMq+8Oq6vHC653rDKIMiSYrKRNvr4T0Nfd9du42RN2TP9mblRU5d2EivXBjUTV/pTjUnhgCGWMKREFQADEFFMHGAQ8wIJG1mrjs11jgzOxbOI/S4zBh5XX7j0/MSk7q1jaGcX1hnY1BgmExNtNi1Y9Jazdx+/H17E1dJ4Co7udDzY022Nbybyp026lqqiZZbeN9du9eBxMgbMjOWDTIvX+xWNrGtwzS4HWvDzA9rJ2rRBEMwMBDABBQBvAiBZqY2lWs51bKj7Yb7s6mx7NGk1mPkDZmbyZoxpqnMaAw3olBXmUI+3mjKRMtVnbZf/defPbvygw/tiVwFgavgh/7hp92RQzPhwK7xZpHcTLe0m8poe8tS2ynZYKlXH/unv3/0pBlrGwMblLXFX/jRw8bIa3bXofZgx0T2paVHl2VuTG7Mndtlmm0zlUY0FVNB8FxkBgIEEcQ585LZeJ76O8bq89Nt/cJkS//44Tsnnlvp1n1GXrcP//rL2Y7pznaQw+s9m5rvNqQ/pGWm7Sp4J2upn3WLV8+dX33h7/8Xv7X+rne8SX/vH3+7sYkCm+y//F8f9Yd2holub7DriZerW0sNt/VTfrBMYYeqNMSs9FKvNH08Pj3mn94103hp27g7A3QZec3ec8euBHQ//szq0WHhPob4DRF5+2RLDw/K1ClqCaVmVMkRoxFcopMnmkE1c/WwncvLky3/yZkOn55uyysP3Lxtg5HX7X/66Cvj4y2/59R8eXd3KA91K3atFi36ZZ6paj5Vi3RjLIIWRwer6wfe947DTzvPK0DJJgpstmwsWx/EfWW0e8tkDw9jun+9inODSNvUOy9Y0yfamZ7Ngt+71rdOM5fq3zx6bvADb92dGHldDs41l2/a3fyL505WF9Z6mrpD1dWe7VovZLwbM9+vvSBKw2HTTdWJRho0vC00M/e5uenso++9Z+b5srY+I6/bJ59f9xuFbC8qu299mN6z0uXhbu1392KwQe2ljomIijiNDUu3ktw+CS0X8uwcULKJAptHANs1OzP+9Ku9B3pl/J6NIr6pX6edRYrNqOrUAg5h4BJFpnMIbzMj2zEldVmr/sGT5+Y/eO/uASOv2d96cF8E1s8snHy5qqo/EHgx+LC72ZBt2dA6eRnzyivtDNs5EVIn0xWNetyJvtDO3MvvuWPPOiOv2yMvrTdWe/Vspe6upX79bauD+MBSP80NY55HMmKCGBP9wsA0NJ3bm0tHmpmenh5zL/7iR55KF7ra+8W/d29iEwQ2yT//3efknhti5+xS44Ze5R/oVuFdq0Mm1gtTJYmgZggggFJGWiIcdkIY77Dc7aduXesAGDDyui2tl6tHTw8/9/6373x621S+/cJif9srx1en1jfKpgHjnYbt2j6m7Wa+2BvEY7/9iZOr7TunjZE35OzioN0t9IZBaXeuDezBtUJvXi+ildGZ94gamKoVVaKMSjP3zbE87BX0lpjKWxdXBxtF9MeBxCYIbJKnXlrMXvhyfWQjdt69Uk0d6daNdq8WahWBiBPDcIBg4ikUWRk6Mdg2Na53Lq/rUh7kGDDPyOv2X//QYQMS0Afqp79cr/QXqmYjFsGLMDWZ2Z7Z3MYnOoVA96e/953KyBt28kKvU0T2LXfZu9hzYxsDRxVFkpoZtYEilJgZqo6q9gxwIbNyZ9+K25fK8kyl/hSbJLBJBkUMtaSDhVb3Dmvd04tOKnWAmCACCjguEUcyrFs6cSKNQakHegO7KfOMM/KN0ifOD8tjK6lcLrL11SIJAlUQ8+uRfiz4T9690xj5hiyu9JtVkp0b/bBjdZBlg9KBOcBIWiGScNQ4BDOHqlBGJxU2VUvcX6Q4W5s5Nklgk5gZySwzo+m9hYBIVEPVxEwABwhggGGAmhGT+bJM7f5A28GZZ+Qbdt+ult23qwUP7gIwRr7pVlbWstrc5HDYnojRh4QgAkjCMMQSoIgIWMLMowZmeDXLzMybGZslsEmyEPBCmcz3cnNVwxkxJTQmTPgKMcAQMYI3vLOU1Hp1TD11RK5Dv/voYqijhvV+6XqDyiU1gne2a0c73X3rTNw509ApUL4Ffu1TZ0NKmvcG0fUHERHIAmCCiNj0WBa/4/65eud0Q7mO1HVNMmdiyXJvRCAlQzEEAwQzD8YlIkZwhvdSh+AHmQ8V6tksgU0yMzOhDa9rG1U4Pxj4ri+ieSpEIobDxCE4AAHMiUkjT7QbFI1cjnZa4cXMscF15o+fXJaxVpio6jRbVjJWB5ox4UOQeizIyv5OWGlDFyi5yn7zs+eklbvpmNhVV9KpA8GJkQVRQMyozez8sEzzQAUY14ntsxNFVDdvg+ZiGvhqvYhsqBLVIa4hIKaqYIqIkjmjlSXrtHx3emL8/FQjrRVRlE0S2CTbtk2m8abMs6ZHF8t4R05VlxK9F0URLhERADMR74ROQ5lo0eu0w0uzU9nzzUzW2drkpZUifOT3n2kcO73RXq98yNtjrRt2TuzttLIDVZKZKkrLjOAlVee7/YVnzhZnB8Nq/sL8xuqg26u9VfXsZN7/2R+9u5ibmlS+ibqD2v3srzzSXO5WHcuaoTM52ZyZbB7KvLulrGWqqF0wEwRJziXnXSqbWTox/5lzx8qyXl3vV/2p8bzcv3Os6jSz8gfetjOyRe3dM9sra3s1LuqBKqVbNaWpsiaYOSeSkcxjJJBEcIlmpow1tBpryvzkZOfo3ISf75WW2CSBTZJnIR7YM3ni9PJ87mP/jpZwV/QhjyF3KXqiOhPnTcTEDByJ8YYx3bKNsYa9OjedHZ0dD122tmyq4SY9eqOI3Z4Htz8m3XnsfG+7+Gy6ptGM5MFhzktKzsqhI260gi01nC3mQda0trOa7Ml23noFKPgmiklDHeNBwe7PMneDmW0/t1TsGlTMlZq3KmtKHQOasDyoNEIdM6lXc4nznZxzE21/thHkZObdqTyT08AyW9TeXdPrF5b6z9fF0qSL1U0ZbqyVZ3OWQrNODjMRM0fmod0QppopTTbieidw1Eye2L2jc+L4hSKySQKb5MPff1CB3r/9+POv5tgzeH9z9P5wVJnFpBmdeO8Q58RMXGxl9McbaWmiac+ONezLDxxuX7jjwPaCLeif/94rIYlr563GXHcYbzzbbd7djXZ/Zf6WZGF3NBmrVX2NScRwYgRRRBNBUipz6bYyt6J1Y0WjP5aq0P7vfvPl5uRYfr6d+/Vm7od//7sORt6gZ071wxOvrE2dXxrsH7qJB7paPeyr/JYgbuew0onuUBulqYsoVTQ0CZmHRoY1hNTwrlcnPx8JJ5JwdL3ovViX5TO//e+ePbq2srb6J//i+0q2mA89MFPBzIUffPT558E9lrlO3mnkd0qU2WEZTQTUmzUzmGi6ON6Q5fGMlxuSvri+Vhz94Xce7rGJApts72yraGQ8sta3IWvVOwL1/WNZfkAlTIsIIUgca/vVsZZ7pZPJp8Yb+rnxlnv+zTe0BoCyBXXa2dTGMN386umNtyx10zuWe80b16qxbbUxZWg7qbqkSjLBJIEkRBKCIYjbqGUsON8wbcx4ZPu41HvjYnnvzmiPH5hrP5UFeRVY5o3xzcyPPXt05b7zq9X3rA3yu9arzm4t3YzrWzNpCnU0SSSUmqSGqqdORh2dFK4RgncTG1WW5UOZavXKG1t+cEeW+m/ypk9MTXU+C3yZLSrVxTnx+Z902mGpk7m1sqoO9q3KK0keEWs1sjg+1lxvBHkmg0e88LzAkE0mZsYmE8D/7qeO7fjTR0+8fb3gbRo6t+EbuwxCHqS/fTo7t20ye3a6E/79O450nrn7xsk+NJQt5t89csIfXUxj8xt6pF/qO5c3yofXeultG2Vzcr1qUytgEdWIajIuEUwUREESYBiC4HE0JHfOxrOhTTar+R0T+WNzU83PBMdjVVV8GU0b/+wn76p5jU4uVuH3Pndmdn61OnJiYfiBlV76vm7VOLhRtaxKIma1YTVCAgTwmHkMZ4iJiOGcEycBIeAFWmFIy/fLtq9OtVx8YrztP3rjDTOfPbBncvk/feeuki3qp/73F25U1YcG/eEN3W63Ges6ExFttdvVxMTYWpbnT5nq5//ZT9ze5yoIbD4D4olza8tFUT7aDI3jY1PZXNbIJ0Gcd5TtllttBFnIgpy5+8YdfUDZglb6NmXG4aVeevf59fSB3tCODArtFDFSWYlimNUIyUQUw2HiwByY5yIT5SIzRFHqZNJVJ0mzGefCA2Y2PdbQ7Z1cHvPBPwmc5bXxRa1jxy/077qwWn5opS8Prg7D3DB6akUSCUiIUwxDTBAzhIiIiQmYGAkxtVrEMhKOpEblsizmYQ8tZKYTzExmLix0/wJ2fZktKvfMq/CXtdNOkOSR5Jxzlrmkmbcq97aqYiVXSeAq+akfuqcEzgBngQaQAQIkoAJqrpI/emJeQvBZUdT5+fk1WVjuiW+0fJZnri4rrYqiVk3lz/34gzXfHPKHT6y2ji7ZwdVeemi5Z+9YG9gd/YLJohJLpmZSi4kaREBxwl8RLjEBHJeIAZhYQs1RmKD4RjZkj0PHDGs6L368mV0A5oHI1xTd//xHp2aXNuKblvv28NrAPdwt5VC/9lYnMVATSeBUEMCEvyZigGJiIACGIYYZZh41Q50TcdIOSfZ1K+8Xei7LnC3+1P/2/FqDuPrzP35nzTdoWCX32NH17Oxir/mll843L8xvNMcmOn779inyLKucUEy2/fC9d00Uh/fMKmBson/8Y7f1gB7/gQhcfQaUQMVlxlVWRUTNZqpoO+pEVqs4lDFR8qgUUVlTlbM/+6uPL//8TzxgfIOePtHtVDHtXe7zwOll/Y61gd3eHdKpakdSAQTBDMDEYSIogAmYIGaAghkgYACCmGEo4kSiCeulEc3GJHCbz30xledPrcGrU7AORK6gNxzmpxYHt6/00n+8UcjbVop856AEVRAUxAQMTMAcYIgJIBgXOcC4zADhIsEwATUo68T6QDIl7O5W/s6ZVlqca2N49zhwhm+McyINQ7bFxF41blBkj5mMqZHUWMI4jXDcu3QG4gBC4joS+NYwwLi63PPnevn/9aevTi13dVezNX4QF/av93y+MWi6PMvGsuAaZSVFXbnlPHPHZiayU//wt15ePrSztTE1lg2++75dNW/Axx8/PdMruXN1Qx5YG/CmbsFsWUFSMRHhEuMSwWFimAliICZcZlwkBiD8NcFABAOKaGbgG4VMOG83djbi3b/+sZPnJ1ru+b/z3n1LfBW/97kzY4sb9YFuwX0rA3too5AbB7WjTJgTRcQA4xIDEED4CgEEzBDAMAThMkO4LCYzNSRhjTrprgbVXQMpV6O3Y8AZ3oCPPXk+W+3W7dMLw+0bA92bJOyrk+xf7DYOrte2bzhsjBVrPgUvi2Z28tSyHnvhVO9YM+udHm/bfKdhG0Ut5Yd/4CZjiwtcB451oxwaD/laaXM491Cd0ntWVqpD3ZrpbinZsMpNxAcn+FhL8uKKXVOsTRknotrnq8STRW2vAsu8AS8cX9lVq7xztWje2y2bnWEUFEyEv0FMuMSEi8R4bVRNREBEaoOVvlFHm8wp3+XrUoNnlffuW+KrOHZhuLOoeXhYu7fNd93UxgBiMoTXR0y4TBAA428ShxpUdcJZzAduuGddywNBdJw3KKlMVIkb59eqt5xbLt9Zathf0+j0i+b4oGy1qFzIBt5yb2XDc0fD27DpbWGyzeOtBo8YPKdqpwFjiwtsfbIyqFt/9oXzB88tFffMb/D+1YF/V7dirldbPqxFyiRgIBgpOTIXrFeKrg3cYRf8dMQ6E23l9z6/VL3zyFh/drKpvCZ9+a/+5Zc7g4p9RbTbh5UeLGsaMQnO+OoMhDfADByoCcMaxGh3c27Nna02M/k4V7Dai9v7ZbqrP+S2XiGtQQVe1ESE181AuBLhopSMSPJlrduGnn1jzXzPP/3oqZn3v2X/+h27SLxGj728nr1wNu7dGNhDK4Pw8HqRHhxGN1splNFTRkcykErJPbQCNL1RBivFMdHoS16pMNVy5Uf+/NTKD793f8UWFtjCvrRUyZtn80a3F+eOn++/+8JK9aEL63LL4kY2VUXJkqkkcyQVRBQwzBxRc1kZOF+ZbBuqe2gYbVtUi2WVBs+d6p1895ubXV6Df/R/vDRWVHbAfH5jWbOz1tDBxDAMBDC+udRAAEcyCb1oE1Iyuy1zU9haC5kqAOMrmv0iTV9YLfet992cRZ8LggkghqjwzSdmeF9bGKuQPVmzceewrM//xeMnn7/jgzcs8ZrEsD6IUxfW9I6Vnn3P8jC/c7UMY8PKSCqoKWYRFeOiInrq6OlhNELK1HHEZ66NODfeNF0bxGd/4XdePfczH7rR2KICW9jHPvEyn2uz7UKX284v6X1LPe5dG/rxbulIajiJBgImBipcJA7F2zA60cLlIjajmm7JSPe/crpaPnvBeu9+82yX12BhpT9RqTsctXFTRT5RE1BzgmEI33wGiCEYasKgdoiTsSnc3L/5THfHzXOD+Xtu2V0AXFgrmi+fHcxV6vb2Stle1IybiQligrE5BOccJiKFKv3opgel3r6w3L2w5jkPNyzxGvzmZ85PL3ft9n6hdy919Zb1gZsaRk+RkqlGEyKOJIJiCGpKskskmklW2HjweqMTHsy9K+rke9/xwM5loGCLCmxhLx5ddLmkfUPN3nqh7BxerlpZWTvMMCcRJzV/RRAuUfEYQZwTURXW+kpVpU6u6e4sai/zdhQ4wWuw3h1OJPzhyvKDlTWbkYBhBskA4ZtMTBADwzAziuhw3rXU5OCpxerGlQ3699xCAfBHn7/Q6Zd2sFZ/sKYxUWMYiIChgrAJBJzzII5BAi2rVtMNj7i6WvDOHuM1OrdS7hlUvHdY8cDiunT6JSDgXBKjRCwiGCBgAhi4JIJHEekWSkoxE7jdiw/i7MR4O7wAlICxBQW2sPvfvLvx+HML+4ZR7ipqOTAoxUcDJ4qQEBIiDsRjZhiAgYgBhpoSY0Sszspo+8pktzSaYeepQpv7m67g64gx5QmmatOJ0sRXKqgZYGwmwTASdRLqqO2yiEdOz6fTmbeTwBLAWrcIRU27qmnXyWdJFbOEGCDC5jExjJgEj8uTuV1R3F7D2rxGiyuDySrKTYOh3zeofFZERxYMqE1IXGR4xAQEEANRwAk4onqGlbj1QRoX9AZDp1JtAhhbVGDrctMTrTHXHNutaofF+TnBBBImhqBgApKDNAQ1M01cJqgqIgmRCifJmdBOzs20OmHHylq5bf/O1iJQ8TU4J6iJxWRW1DVVBDBETNg0hqCYYSZRVLUzLMojiyvVee/sEf7KoN+Pw1p6/UHer2qfUjJAQQAcIHzTGaglwDADQVzIQjs0ZNw7y3iNLix0Q1Rp9YaNJrS8uIRaNDFFDMwylMxEEEQFSQYGiIGIcw1EnHSLgkFV0is1rfRSZAtzbF3inGTR/FhtbkoRLyCCmAiAxwgYQQyHiRMTh+Exc2BmWAQzM3BlEteP0iqStIZFbACer6M5Pp41xzoTWe7HTKNXrcCiCAoYm01wgIjGlNdVlVdl5fgrsaq0quq6rC2WSaxWh5oDBBA2h2GoqSUwMwA1kai4qCK8Bp/7cq/pgp+olMmktAEHhqEYBuYABzgxhEvMgTkwAOMiNUcZhX6JDEsd/4snz8ywfqzBFhXYwtTMqmiU0YgK5pygAgiGNwPEACIGIAgmhmGggqkJQtLAoBb8UGSsZ9rv1hGSgudraU1MtGJirmW6LfRTEEs4nBkOcGwOwXAgTpzkeFItNlhypAVvWvBXnIAgEhFKFWpzKGAYgrJ5FBADwRSqWrV0mpyY8fVla71yanyis62knvYxdDBvpmbiEmCAQwSQJGAmdpEg4jBRDLWkFWoRLIoT87mz7Svrxf5f+tige3ZjZekXf/I+Y4sJbGECiIATEAHDQAAETMDAUIMkCCAORMAEzEDATDDzxCTU0UmyICGIgAlfh8aUklImpTbEAEyMS0y4zPgKAeEyMy4yMcQADBBA+H+I8NUJ4DBAnNBuN2y6oxac8RX/N3twAuvZeZj3+fd+3znnv9393llJDof7poXaF1u0LFtWZauunTYJ3MBQtzhIjS5I0wRG0dgFYtiNGzhBkKBx7RRGgBRuHddrXMWIZWunJIoiRY24D2c4+507d/uv55zve4s7Q22RLHEZUhTF5zFgsiFZJAMIMEiAMSAA800YMF8lQCDxdQxgvspckUEghYCKqGDxbdRNVlSOsQhViKGrEATClnEUZK4wCLCwBeYyyZiEyYAoY6YbUb8SnSpQdQo6Fa9IBa9gkugWyt1CadQYyLaDJAEIsJyBZAOW2SMFiQCYLxOBoEJVUYb5hTJAIb6N0ebmpHU4N5l219s8WHJQx8qSg3FAGDBfIbAkGYOxDDJgZGMCIL7MkpD4pgx2IkTC/EK3s7ba7ZaRyDOEkIQAAQFjMshYEgKTjUEW38iIDBgQJgAChIWQwEbYmK8hwAgTJBVFQdmhiCLwbVRlSP3K05Ty1HaL2WNZwhFhRMIICNgRLIuMSDIJyBgIAXqlma/IC724c+TQwsX33r00vvW6ZfMKVPDKleomT6M8rqInMQjZBsQeZeSMSODMFQZxmRSAgHOSsDsxq1+0w2DtdLvFEGj4NprpNLfEpm2r1gSjCE5gAAMGDBhLIIGEsYSMjAVgLjPPEFfYYPEMAwKwkEQIoijUFoU2ux1tlJEZzyh7vdgtQm+xH7vDBg1nZlonUgYUAMzXEV9l9lggABthDFgIia8ykPk6EkgytOQ0DildCIEJ316a74dJPZ1u5iafyy3X2EXfiiUOtgKQucKgjAPISSghwAQsg0wRTCc6das4ueHwwvDW65YbXqEKXsFOnJ+MgtJmVWijEPsDoSsLZERGtIDZIzIyZBmCQIUCARtiaNKgbEaLVT7venburtXuJSDxbSgEZOUQQg4KBAI24IwwkBAZC1DAMgKQsBDIYKyAASFkAGEEZEw2X8OADEFRnTJSFXGSc36SlB8PYsgzOv1+pKGzMlA1q+1o0zaZ1qAsW0AwIK4QRggDxhIogDPCfAMb5WzIiAwYI0CApBiRPHMzOh40fjQq7/As3H3D2mS6/eC53Orh1LAPVTeFEEpb4GApyBiTjVqEJWVkYwpEIWFEykFZRfCoDB4dWq5mQOIVquAV7MJ23S4NirNlowc362JQTuJNqXXMOWNjCEAGZcAgAGGLbFmSekVgror1fNcnF3p6pIz5IpB4Fhbmqu06x4eHk3ikl9MNmPlZDmQHpBZhwFxhZIMyIEBAEGD2CEBcZgBjDBjZgLnMAkcCoh+hH5kEdLxf6Yn5LkOecWh1MBtO0vq5zcnFQk0dABNtQOwxeyyDAAzmCgkkLAMCDBZ7ZBssbIsMZMCAEWCLIFFG6Jaa9TrxzGIvnCwDI54dL/Z0oZvi5yaU+ybo8Kh2f1KbjJUFIiNnICMMFhBxDiBRxkC3DKnf0en5XvuFfqWnuwUjIPEKVfAKdv3BOS8POHFuh4+tz8JSb+ZrPWmruklODpgAShCMCQhBjsiRbCgK54Wuwmo/7iz14xeX5/25TslFnqX3v+Po+slL7b2feGyyf5qbt2Pvb9qOExgkI4SQjZzJAYwNUUKAEEF8mYQxwpYNGAOykc0eI7JFkOiGzCB4t5KeuvP67lNvv7Uc8Yyfuuea4fqwOf7QU48+kfJsMzs2phuMgmkB82UORjkjBBKWhIQwCCxQtrHBBmPIQAbMFQIEFhHoxcxcR/XSYv/s4dXeqV7FiGfpL//YLevHz6fPfvyLzWE28ps2lVdTSsyyUcjIGTkjMiBMgV2yJ8ruFUFzVZwt9otjh1byny33efTJ85PxXUfmeaUqeAXbv9L1bYeL8/Xx5v5+1Rxc6fnaXvAt00YL4zrEaRsxJVLGZGyDIlGRXjRzHbf7F7Sxbz4+PNfl04Oe7u9VXORZ+vF33Then3Hq8yceenqhk7faRN4RZEtBAckYITIYMCCAbIOEAPFVBhljwGAQAgIWz5CMMG6ip7tFTqdcx3Pvf9PNm0DDV7X75sotkU72O3pwkuJit41HDIOUg7NBGSzztYxBPEOAAGOBbMBYIMAEJAECjA3OQYLcLzLzlS9VRfHw4mL/S2vzxTbP0vffdu3otts4+djpU59rmtnREPJUMd8waVKvSdAk0eYSHJAidkQSvTLTr1IalN7pd3h8vqNPLs+Vnzq0FE499NQw/Ydv2c8rVcEr2H/27msMbP/Zg08+tlTM1rrzXhv38LDWXRvDMEjjaDsSJJmMncjGZcBLXVjre+fwsh4+vBo+VRXcOxy1X/of/uotU5497+swjDlfXOzGp6dtvKaYaKkRHZBNBFkQwDYYMGAgG4JAfFXG2MjskYUsrCjEVwSElKbk8ZOhnRybDb0ONHyjdm2hc7pbVR/zZujNMsuSB6OplBwsgyzAgIEMGGODJCJg9shmjwUOAEEQkQICMsY5g0SUU79Muwtl+zRte2y+O//wT//gtQ3PXjq/Mds5slY+ON91OL5eTzo7aTCa5WvHU9itC43aCrsiqiBno5BY6Fmrc5rMVX50UDQf70R9YjorHvqZ99+0yytcwfeArc3RZKHIj3ZjKHuUu91G607tNW5mS85hPsbYUyBKpDalcSBvr/aLS2sL5YmlOX1ueT7c1+/q+N/+iRumPA/7lsrT04aPTHKolmveEUPuTNqsZFmORhBCBjI4AxkwgAGBAAO2yFiAhBSQI0Z2BmhVxMRcRwyqPJwruG+uSJ+slM7zFzi80rl4aZTvWx+1Bxd76e3ZPjiuTU5SlAwCARizx8gGgiELBBgwkEFcoUggIEVAOLdYpiygWzGd64VHVxeK+zuFz/xXP3Jtw3P0mtVOCnfMXXzy3OiB7cmINmnU7xR3tn1duzXy3KXhLKTcKiqSnRVCTiu9uLs2H08NSt/Xob23VHqkbdKI7wEF3wP+17/+2vyB//Ejp15z576t69f6FybT5kRR795WTEZHW+tQiMVSWZVVjKFu69kGqT19cHH+iWsP9R7pdosH66Y9XkRPeZ5+4ocOnTp+tv6T6f2jzqxpb5LyYjNJTm0QjgaJKMmCbGMQxhiwucxABgwBrAAKQgFSME4OtHRjy2pfrAzChcVe7zNvPrLwqTsOFBv8Bf6L9x0d/tq/OfloYHzDYs9P15mDxcTdkEKBIwiQhYyxZSMbnAGZy4zIQMYGFBFCCgixR8oulOlXaL4XdufnygeuP1R+arEXLvA8nbiQp5d209n9C+XOUj8+kol3N63fdn59d3+33S7rOoUQgm2HENSs9eeePrJv+eFet3xw/eLosQePXRr+4a/ck/keUPA94g9/5Z78rz56ajgYdI9vXBqOt9frp0Zxuq/JYYmYB1WhWBQxpdTsitnmUrd7/tr98fzCfOf8j9997ZgX4M3XLY3uvo4T9x07/tm5qr1u1jbjJqWbR4S5SQN2xFkGY4wE2CBjzB7ZiD3GiD02xpbdKKrVfDez1Ge8MghPrczFTy31i0f++gfuWAdavoWf+dEj7Zd+46HHm5bfnzZ5Z63vt2zLB3ZnjilLQoCNzFdIYHOFgQxKiAgGjDNZkIhKDIqkQdfNylyxuTQovrgyV3x2/3L3oSNr1SbP0/vfOG+Yb4CtzVEz+tADG832cLY5G3phJ9axCI0UhG0VMbQLZefS4eV4dnWlf/7QUhj+8n9+R+Z7RMH3kP/0Xdfm3/zIue3dSR7OUnyqdQytQ5Cj2hxEllsHy0WetiHtjHJKTokXLj89zkPXO8cWqlS2bZ4Gu1soXO/ssk6OdsQyFsgAYo9lZABxhbjCYIOzo2r3yjavzslrc/Hcylzx8bW56s+6ZXgaaHkW3vfG1RNPnZ/+zheP726VpH4hYp3z4rQJneAoAxmwhCWUhRAgrjDiGVlcpmxRU8bWix3ltUG8dHg1PnR4tfpEpwqfn8zSiXvuWGu5Cj79yHo7muZTk1k+N2sVmhxpbIKFbexAnUPeneQUh2364D3XZr6HFHyP+eA9BxOQ4EZeSjf0Q54LOxvqFF9Q7BT9XojdKW/rdrhje8LC9kykxGUZIWQbbLHHBikKmUwGTBEDnRjcL5TnK2+tzcXjawvl5xd6xZ8u9cvP9cq4wbP0H7zh0BQ48/d+8wufxqHX2Ocs3jCquXbWeH7SUswSGCECJlgWkAEjAkJkJGQKQRWhX8Ggw3SlHx5bmyseWBmEz67Oh88POvHkX7vn2par5H1vPGygARpe9Q3iL/zCL/Cql8YPvPH69o/uPTe+6+YDO6uLva0YTAxeScTurI0CFLEjIIkQggqJqEAMQiGgIKTsMjp1qzLNdYvxSi9f3D+XHzu4XH3kuv39Dy/NVfftDJsTf+sv3TjlOfjYsfPsW6qGvW48ldq024vuxhB6CfUzFEYWIiggIhAcA4rBRAlJVsRFlDuRPKholwdu1uZ15uBy+edHD/b/eGW++ui08ZcUtPumGxd51UtDtnnVS+vBk9Pu0+vj1WMnN2+9sF2/YWMcX7s9CbdPZum6um5W66btNAkUCsWiAgmcSanFuXEMuS0L7Xaq7qluVT3RC/XD88X00cNrncdvObJ0anFQrX/gjWsjnr/iF//VF6+5uNPeuT7izu2Z7sqEW42Ozuq8Mp7lTp1iSESqIlJF49SQc+uygKJUrTbvxJzOLsyFR1aXigcPLHfuu+3a+YcPLHUu/PBrVke86iVV8Krn5dOPntfDp2bhwlYTp41Dk3Icjqa6uL7FeDxFAhB7ep0i3XbjvuY9b70+TyZjTq3PZqGozn3gbQc3z2/Vjz56ZvzIpd36+y5spdde2vHR3XGem9U5qiy6RRW7CiE459TWzTQ37bhbeNar4vp8Pz0wP8ifDSo+s77Jk6NpU++MW5LJvAB/8vkzqTffP1lvbp+bi82X5gfhWKfbfQuheOvmcHbtxk4zP0p5kESn14mxVxbOTTvLbTvpdULqVmHcTmfn03T88HwoP/za6w595sYjyxdPnR/NRpXy7957OmyNHbZHbdwZt8XO7lQbF7cY7o65TOKrzKDfybcc3Z9uun5fK5H/yjvWzKuek4JXPR96660HtL51bjCZpv0xpIOzhgNt4X4VUmrUZiSAYOQy6Nzhhfbht988vwnzGUhABsb9UrMLm6PPy9qeTvnceOJVdxl0i9BXZFWxXZZCaedZFhdz1IUiMOmW7MxV+cy+OZ/uVeHsL3/wDROukvfefdjvvZs9s5//3z92wbFsYkeXGvSlyZTFKrpXdsJi2S2Wi8B8dFuoZEsuLhaRSRDjJqbdhuaC2vbxe25fOv26m1dbWBWgL5zY6j19cbwsc6BtuaYuvFiGlAqlDCBxmUEAnZC3l3p6+vq1znlJm0DDq56Tglc9W/pn//qh8NHPn6mWV+f61xxamrfKg5Oam9rELSlz43gSFnfbTjvJJHFZkLDb8rHPne70zv3+2TNK4yanendre7K5vr41ecudh9KBg2tnh9P2/OY4K8YQ33rbUlfOC6cvjA/sjob7cqYToqaLi+WpO244cKZumXz8ofW0Ocq511OeJWVeJFt1MVGI0yr4vOX7z27MWF6q4nvffs1SEVl78qlLa+sXx92Vhc7Ft911zRnFOPy9T5yZnT3f5rkYbZQ+/cSQDz2wU6DcLQsW2xz21zleN224aTrjzvEk7N9tqjTOuWWPxGW2ALmpzh2/5Id2vrh57OLF7cd/9TefvvRD99yS/qMfuSXth8yrvi3Z5lXPzt/7559cefLM9mtcVHdW8/PX59A9PGmKtWkT1uqklbp1p562uU3ZAoKySmWHothQZ3Bi0PPOUmdc90L9eJGnny09e9yE8//4v313zdfTIyc34+/++ZNzW7uzge2IaIFdYPjL//X3me+8cndcd373I0/2Hj2xWYag8Y993w27b73zQOLf88/+4MmqiDpwadTeuDGsX7891a2b0+7BcRP2tW3a37btoJ62btuc+RrGGKsqNZwfFOd7sX28nG19YbVTH3vv244+9hPvvvkiMAMyr/qWCl71bf3OJ06V3SouUfVud1H/0DSFd86mvrUh7RvOVA5n0riRmhQQXUDsicpUagnWdcp+fZsTaj2bRT1UUi1UoeoP+t0v/Orvn16/67pu/SNvWE1c4WOndlNNuT113snZxBDYt9Txz/2115qXh+azpyftxWkYTV3pwGLPb73zgPkaP/O//ZnOPf2IbrrrHYudTveOaZO/b3eS37Uz5a6NSbuwPS3KaWOlFBBdQHwt25hM6aQZ6fae2jsGDjcVsXvd58+2i1sfPf/wxYu7Zz7x8UeG+/Yt5H/+d99lXvVNFbzq2/qjj51YkPyDkza+ezcP7p5k3VAPvVzn1JmmQJ0STYKcAyIDYk8mk2WUMgqJtjWzqYqqqG7uFjEu98PNS6WOjSeTe7eG8TPAJs/4yXce8U++8wiAeZn6wVsW/YO3LAKYb6LXicVtt956YHM0ufPpbb1v0upd0zrdMK29PGmI07alTSJbCIMCX89Apm0Sk9zEWiwP6d81ltaap+s7Tq+fv7cf2w+/5tbVx1prE2h51TdV8Kq/0P/95+eKR56elbt1cXTWNO9urPdPXB0Yp6I7njWq2+SkjBECgbEx5rKEyRiUUMrMajFSoCrC6lw3LHcq3TyquaNXMxjWafOJC8PHjp+b7v7w69YS38V+8bee0Jtuvy6oXFjeGo/v3Jnpns2Zf2DYcPdk6jhrko0NCTsgIiaDxb9PZLJa6pww6jh0DuSag+WovbNp8lpduXGv1Mpi/0vA1oce3PH7XrdgXvV1Cl71zQjw+tZ0ZWNn+M6i7Pzg+Unxjt1aB1sXnZQLZUesJJNsDGQjc5n4CmP2yMIyJkHOjGdN2AxxISgebe23lcVk+Ef3zjqz1vf98OvWJnwXC3Lx+MkzB6uqes257fa921PfM5zpxlEdYpMC2ZYlI4EAMkZ8M8YEGzBG2GjSBDZclHWbbjH8eFmF+SNzvfyZ45NH2zZtAy2v+joFLwut/ugTT4f7HrlUWDGu7ZvT8kI3X7tStPfc1UuwmHkJffiLG/Gatc5iA7dP2/C+aRvfO07h0HYdOjkHIsExiqAg22QSYMAgvikrABmRyU6etuAJITnMg2/vFk2aztgqivAkMP0Hv/0Ef+c/ucl8F8qoc36nvXVY655xW/7AqM6vn9QhzppgECJgCStwhQHzFzFCDkgBC5osdmbRNmtV9GKnVL60W69/9uELs2ntL/3YG5dbXjp66uI0/J+/94XqyVPbfUIRl5YW0sJ8L8/1i9QpQw3Uf+snb8p8BxV85wmKWBVFvwysKjLfKVRVhSYKxXlY3AYMmJfIfY9udr/wpO6+sJ3fc2ka3rgx4fC0oYeFBCY5G2QbgxDfkgSSMJYzELCiZm1BnsQQnFaVmzuW+jpx3Vr3iV//0AlJnAdavouc27ikg6sr7nbC/MlL9Rt3J7x31FY3jVqFOoHJyIAAR+QAZL4dIewACCT22DBpxMY4lMg39DYm7xmPJ8M2cxyY8NIJR9e63TL4iPDrJS8GeRgDwyKwU0adMZwEJnwHFXyH/NJvPR4kqibn+Szv3xo2By5s6pBheWWSql5nNp6106f/r49dOjdXeXOpp53r1rq7P/2eIzVgXkQzx/kLl+rXb478rq2pb9yZ0mtaITCypCxytm1ACPGtCSsgkBxsCasg5+jUBHacSjnvF+GulVl6+vx2vTuZ5Q2g5bvI7923E24+OF7aneZbdya+e2vMa4az2Jm0gdbJKAPGgCyMEAHIfGvCBEBgI8yeJpndLJcx79ua5DekzOPz/fKjwNY//aMT/OyPXW9eHPqXf3qyOnlxMjdpy+VZigcublV3jdx9p3JY9TRuT2B7c5ovBeVH61lb/c1/9MDp19w4N/zZH7+p5jug4DukiFQh6PrhKN+1MarfcWmUbz+9zcK4phpst7FbuM1Ko37H60dXwvGVfnwQuBc4BSTAXGVn6hwOV6Hqz3X3P/T07JatYXvb9iQtz1qTCFgBhCEDCQEmAoFnwwgIgACBLJQ8y7Azi6HX4YbtcfuulNOpJvEAMOW7yMXdtprU6fWz1u8bznT7hR0Xk9qknIwaTAvKgAADyAgQYIP5MmUBgiDZAssYQBYZSKDsLDOzOrt1sVYU8eaDvfK1/+LfnqhnTToL1Fx9AoLtQ1F6286oef3Tm81Nw2l5xJ4/4JbO5k5ZhyF1LNO0V+QLi0V+x0InfDxKHwbOcoV5CRUAv/r/Pl5k053W7k8berOUy1mblFJTqxmPaKdj0PSf/PfvzrxA/+C3nwgLvVBcHHFwWuc3jGrfM5z63duTfOuoJg5nomlMVWRCNIbdzUl4qozaVzfjyW/8wUOpkNc/+IHXTrnKPnb/ejyyWq7t7DY37Ex13dZEa5M6hzYnWxEEIPZIZo8M5lmwuUzC7DESYCllmFqaNF7bnXJnNjctDYoVYPhL/88T/Nxfvsl8F9jcbYvxVLftjv39kxlHdyZWypkgQ8igjDF7BGKPAQkwxuyRBeIyAwjAYMDiCoMyEjQ5sFuHblXpyGTWvvn0xbQ1bX0RqLnK/t2D650mef/6iNevj8IPbY7T23cm+eioZh4KcoaUAmCKwsxKpnTCrdkMHjk72f2V3z52/7Th/P/8U3fWvEB/99cfipIG42k92NwZd+s2F1WnUhS5mY5bpWZ89ND87t//G++YFVwxAG4CbgVuAfYDBXAWeBB4GDgBTHiBDOW08fVt8hvPbOf3b0/8jsksHx7XjtMmQg7UGdqcUcy0hH4mHt0a5TTvnfpE3u6AP/LBD7x2ylX20GNb5RNPcf3Gjl6TcrEvOZDJgAEDGSgEARvLYMS3ZSOwMZaxAJJxAQ5AAlpmbQhbk7igEG48VMW7f+2Pjxs4A7R8Fzh3qY5FYG3ScP20DktYgsBlOSAFrAwCnC2LywwGhPgKAxiBjUHGEsoBS0hREIwzTSt2yepO0+GtYX5banyyzfocL4L7n9heyub7zm7r3Sc349s2djm6M8r9WZshZGwgAQg1ZlqHzqgO+xc7+R2ZujOdpqVk/gCoeeF6wGuBu4AjwDIQgSmwCTwGfBo4VfyNf/jhxcHigetD0Xl73fotkzrd0aR8sE0uUw6nUts/UMX+/JH9Pf32p86d2h634//yPdcmnqezl6bdGLh9c8z374z11q1JvmU8g7qRTQBEJpMy2NBaMWXPz2K6MYWc6xDH3TI+9i/++MlLvU5sf+o915urZOPSKJYh79+py+uburfY5KDsiEmA+QoLiBjzrNkgc4XBgA22ZSNlNTkwamLZb7Xatum63XF6alZzjpe5/+6ffFr/+L95q2nqhe0mLM9aLTWtg4gWNoAAHECADQZsvkzsEd/ARjIGxJcJS2AkglM2uYU6ebFu8pGp8r6UVfAi2NipF5rWd2+Owts2dosbLo2Yn9WQMrbMHtlgLpslNGnVFdwwqJiTdGFx0PkssPtP/83J/LM/eiTzHP3D3z0e9i8U5YzONbvj/ObpjB8YNummNuWVQkUMYpLb7kZw8dDpbcLP/cbnnihiLN68M0m31fBjuzNeuzFs5qd17spBUjEoymJ130K8tuyEQ7vj+pNN6/uBIc/T6Y1JR/DaSat37U7CNaNpoE0BI0CAsTIWoKicTV3XxNgOJlW8Jcb+er8Kn3/y9OaWpHNw/ZSrZGd7R0XI3WFTzY0nVNO6cjKyClnZYMCGjAHx3MgCDBaX2UCSMBDILmhdMG0zO6MxVa4ZNZHvAuF/+fV7V3pluHlnlvfPkoqUAntEQhgQIOQAGCyeNQthjLjCmGxk9hghBDaIZ5gXw/awHWyNm2t2puHa0Tj2ZnUkW1hByOayIIRNBmfnjGZtLrZnYSUU8aaD3fLu/+P/OzGbzvIpYMZz1DS52tipj2bCWy+M4z07k+Jts7pcbNtcaIaCnKOr1U5oFvN4tm9WD9eLSe13TtzePHR+3c40X3txNzOpM4FAGel0uyzO17m/M07VuU2GZdRjwJDn6H/6tc/oF38mEuy1UeMbp41untahX7eyCUgCA8qgDBICMLQpuTZxGjvzMfrIoJ3dsbUzOQveAqZcJW12sD3X5rzcpqbTpkgmgiJXZCBjhBAgnjMHxJcZlIGMLZIDbQ7UTdvZ3Z3MazLpTnPJy11ZlYHIclnqGgcWmyy1BCwDGZSBCASwuMI8JxZCmD0GDGQswAERgBBSjqUJnZWFTgfgTx64pPe+fsW8QE+eGxZ1m+cU4qHhtN0/nObFWU2Rkk0oJAkTEAIFwBI2NjJuUtCoKapO7YOj0eyOM+cnZ6atzgEznqP1zVGnCL51d1S8dXfauXN7Gg/XTSDljJ0IypSh7KaoXhmaZRymxWTGu3aaZnWjbuZHjWhbCARQIDkzm00YTbx2YUuvrWs9emipWgbWH3xyPb/uxn3mWZq2FD//62l/v+KWUaP9rWMnuSS7MMFClrD5CkO2ZWEirSPjtiKoXZgwuW27nTwFfhjY4iopuv0Q5aWyCQdiHefcGGchgiGDAAwYCIB4boQJfIUSKAFGFilBXVu12+WZ6yOj0Kw0JvAy1+326Hbd7STNexi7taxWCYcGO3OFAAlkDCID5lmRsCQQZBnMV2UAk0VOoarbuJiqsLay2F0Fb4xnqQbMC/Sh+9Z7NjcSijtasVY7F5lnZBuBQhASgQAkyAkDJpJyxbQpGE+mixseHql3Jvtbh8jzcG5jtxPlW3fr6o3jsfaPZx1yNqJF1GTBLFXgWFSxXELkok0+2rS5P5rmatxGInII4CDlnEipcd24nMzC/k4ZD5RVXAA6uShnQOJZsglN8kKQ1owG2RKKKBSyMiiBzRUCDBhjIJJd0uSKOtFpg9ca0iq45CoKRRFioBusuRBUgbBlLCtIyIB5YQQIMAaQERkcyIaUUU65l1Jebu1BchYvc7GIitFFjKHjUMQkkzEGLC4TCAQWz4sAC8TXMGBks8cWybFrxblBr5zfaWedTic0XAVtdmFYDjGsWrGXCZgMGHGFDZIAIQxksDAiO5JSSdPMOhPXSyFOB8kx8DzMpnUI8lzdarFtU9WmbMgKai1ayNC6cJGDCEWpKAKXCTtgB5sIBDCAsAM4AKIIoRj0q76ho6oSz4PBgAGFIGIMkhDfhINxADBgvsqAeREZy7IQzxCvepkyAgImsCcG1O/HMFdUYW6+4moY9AoPerEpYmiQMt+UsMFkbIMBxNUW3KaQ2005rUuehGgpZFACDBiRFGOmU0X6vZKi2ylOTFysdErNtaiXLUxAigSZKCmEpnVuL+XWmznniaAtysI8B71O9FyH8caU3SjXMWApCxJgvp75eiLIFLGlLHLd7ZaX5qrupqDlKkptgmBSG3AOYARIMmBAgHhhDJg9ArDAgSuMsS1NQgibRdTIlnmZ65TBvY6acuJppG2jswMJARjEZQaL58sABgvE1xBI2EIyUXkqGKXscSDU3W40V8FcP9bZXEi5PqvcjgMZARiQuCIDwhnAgNgjMkENZTCdMk/6vWpjvky7bY6Z56FXhjoqP9W08Ys9hwOt2DdpoU1BWESZTkh0o5sqMCpFXRxYnf943o03Da0DnuXFcS1SLoiqKKIoi5YYvO3Z6PFZbh47fZozcHT3ztVKPAe3XDefXnNddem3PrF75tK42Z1lspo2JNsmSHwjZYHFnqBEVST6PYb71gbHb1zrnxRMuYrqunaU3bTROUfAKGQQQjaXCRAgnjsjMl9hgAjOgAFjsh3CZtUtT8530qVxW2Ze5pbnO96/WIy3Z9OtjkaTikRhUBZYSAYM2NhcYZ41G9mGgPlaAgQEEXAMqa6Kdltm/cwFnYeDo0GvEFfBX3nnNZMZ7ZN/eO+xg8rNRiVSIEQRgIABY8sCAwYQZk9LqUS/FPM9bR4+MP/44eWFM9OGlufh1qOr016Zv/D4xWoubZe3l1NuvziONI2cMWVoNagyg6IdF21zXG43iv0rcx/fms12BkV9E5nFMoTCVohKxEAKoR13Q360o/zJMtdfOH/m0haAwDwHP/Tm/fm61cXhHz7w6MbCyBcdvDNKLI/brDYZW9gAAgLCYLHHoBAy3djkXvRGv9d/5JYblo4HMeEqikE5it0YwkaMca0oYjfZZGdMBgwEhBDPkzLmGQ7ggNjTEpQpo93thMnSYn/r4EI13pkG8zI36BU+enB+6/Fz09PkerMgtYGykiM2gAEBBhljZAHiWZMxBgsQICCAeUYmxJyr0m0R8+zsxeEU4I7lylwd7lDUTV2fG5Q8aocbh028pnbopwTYljJ75AAYIyQphkCnSKkXZpvdGI4vLiwdu/3m5VMbO3XL8/BX339nc/NadeaXfvvMQ7M0+WwRvYo41C8ZmFCWIdSDiu1uyE+Uqb6PenK6WJjvf3r22IVpNzU3VUUsV3qdVYXUFbVzSqPcTM92Ct97dH//Q3det3psPMsTnofrVhfNHmln/0p1pjPxyWl2MWvzwniaqBM2EQhgkM0egxBEpban2XaV2pPbW+2xv/SWW48DLVfR0nw/lSGfjbPiiW339k8UlmezmqZtDcYSIEEAbDDPhWWQsQADCByNMyFkVTEzqDKL/djuX52rr1sL7cbIvNwJ8ptuHGz8y3938smmac8XYhJE3wRMAIwwkLEyYExAFs+KjAVgMIAQUTiDL4NoQkRlFVV1okLmRXHDgd52Nvee3okLu7l4T437s1lDzi1yYo8RXxZjpNPp0I2zzZ6GX4p1c//WZvzCB+6++fS/vu9S5nm4ea3KwHTQ06mjB6o/2Z2m3X2T9h3T1re2KcyhYrMT9UCp4t56ku/dujh8uvib7zu4/Wcfvf94iT5aVJ0LZRWXFemCnep63Lbj9cp+6Mjq3Bc/+KN3XgDMC9DrxtH8IH4hFj4wqlPK5pZN2sFw6ljnguQICMkUQURlYmhTNzZnSrWfLV3/+WinPgk0XGX7V/ptr+QUO/rShTreUjb5hloWgBFCYAHGZBAIAeLZEQYwgNljDLLAdGJirmon/YKL3ap3av9qb6t2k3mZ++l3HzTAuUuT3UE3bMQibAxTnKMOFRlBNmSkBGTMngCIK8xfTJg95goDBgxkC1MEKAtRxrBdlTrR6+hCk0i8CG462NttMw+MkrpbMy1JiVnUvmlDd9aanEUMIgqiTK9LOz/QziAWj8xlfazn5v7tixsXgPQfv2mFF+KGA8Vuebg8duridHJ2o90azXhk2jIwYWtQxWPzneJYDP3H/s7ffutWwRXrwJ8CnwIKIAAGMtAAI2AXMGBegDuunRsPuvHTj5wej0ydu0Uuo7kee3HYwCwHjCgC9ErRj03T02yn1Oz+qPybwCeDvMWL4DW3LDVH1sqTH/r88NgTlybvDCQUMg4BCAIhY8hYCQugEAS+NQPClp2DhRFZllFohZMkcifmeqFqL1akJ7Z2wxd/9A1Hz/7an5wS3yUOrXZTp/DF7YlObjVxIUy0PxthEAnRIhsTsIUJiMxfTJgANnLmCmMyJllkhOnESL8q3Svj6UGle1cGemTaUPMimOtoPG54ol85HV3OYbeXx7tT/cDWOBxeHwbqVnRioIqmCrDUTzsHl9vHVgbx4yvdlX97zfzCl6atplwFgga4CIyAp4AuEIEWGCNGwASgAPitv//+GXCBl8CPv3l/C5zb3K3zeNbMta12hyPdULfhcCxYbewBhiKS+pXqbtClKqenYq4/KfzAb/38e9Z5kXz/m/anQ4UufuTh0fEiT050yBdqFWutYtE6QpZNQggQsgFbJPEtWAKMEMLCgAADEjEEqljQrXxxocvDcx2Ob+9MtgB+5r3Xmu8SB1Y6adDRU3Erf26wnVbmO2nfuA40bcQUYAMJJJAAYYQAbL6OhBFYgLjCWBlkhDDChjLCfJVnvaiTZSg+s2++fGJ7nBteBD/1nhsyMPlHv/PYqTTg0+d2cx0Du5lwY+M4aFOoejGGglxHaWu+67Mr/fzEgYV4/82Hl479xNsPXQTMVfCBN+8zUAM1sM23UPDSM0AMupSz/7xThAev29dbW5nPR0eT/Lo2tdcYVERNex22ixiPj0ed+zc2hsdTm7Z4ER0qlIHp0yfOn+/Uw4fnKY6lMHdXjtX+SRPUWiCDkIxxBjLC5luRcBBgghIQMAV2hFy4LKMG3Zz7XZ5emten1+b0xKSm5bvMDdfMNdcf6D7yqWM7g4UL2zfOuvnOQPX/swcnwL6eB33fv7/ned/3v5z9nnP3q7tJV7Ilb/KOMbZxDDgQSGwo0GSSaQpplobQaZYmE+hMU0iHNDNt0kzJOhMyaYjTBjIJoQZjMMLIuxZrtbVdSXc/9+znv7zL8/w6V9eWDcWWvFwBV/fzidsu1KXg7OigRnKGgJABYYPA2DxHwpJAAMZgAihjARIiCgPKrkKu56tudRi7x0eT/MCPvvfWZ/7RfzrNtdR0Hmd4bKYfVstK968scLjL5ZGcWMqJkhzWjJ4ogs9XRdjKZjtIu4AB8xIr+H3yvrccaIENw5bg/C/efe78Z5/YWh3XaR9GZRGa2ZmwM+zFi9Lc6R/77163zUtke21jZz7m+4K12NENTLPQpqLf5IgQEC1FRAZ3QOIFGYQRCZTBBoKkoJleSHvn0vrSDJ+fHRSfPrAUTq+P3PGHzOtfuZxPzRerj52dPrrQ596u5Wib06kmaXGco1pHQ0FQAtuQhAQCY8A8R4AADIgvMldEnIUJrqI1U0lzQ51bGPKJhYHvTblbBfyXv/c419Lf+MFbEzAGJtCt/vajG89e2mwP7Ey6+d1xFwWbpw4tnnnPnft2gAyY30cFv8+euDh1rwr17jRf6jJbKVMAksldIreZVqLmJfSmV+6bHtlT3vfhh3abvNkchO7guKv2T3Ov71yAIyEKhaycbJuvzkIGZECAkRJRmVgozw+1eWTZjy8OfT/y/T/yXSfO/r1//4T4Q+bUfJGBZnunuXhgqffxELrBpG1C03Z3pq6KSQUQMSB3iGQTsAQyiC8wIHOFAHGVA86F7YAEg9LaO+e0PFc8duzgzH98zfHeJ7YmecJLy/V0JzVt2p62HtetY9OhIpAUuga6DIX5fVbw++yW/X0D/tPvPlIDNX8A/Lc/8NoE7HzogY8/NlN2H+4cNZfbbxWcqpN6KQfZmeyMbYwAAeIKAebLGTlji6SKEFAZxaCKea7vnaUhD8wN9Gt7ZvnEtPU6wN/4/pvNH1Jt3U6OLPc+13YuNkfMZBNi4RNV46VxLZpOgC0yV0Ug8OWEAWOuMJDBERxDFTLDyiwNvLE8Gx5bmY8fO3545v73v3nfWaDlJdbrL+VvfzUZaPkDquCGr+hb7ti3k3P68Mce3bykzToOg+d2unL/uFO/7pK6nCwCEICAEVeY30kkpAwETOkQCvp9ee8sO4cX8um5nu9y4v9ZWtCTZ1ed+EOuS+4O7inPP3lx2h5c6oW5AfXGhO/YnOTXrG5TdskGE2SMcA6YwFUCjMiAESAlRMYYS3lYSivD1C7PhscPLfX/86GV6q627s4DNTf8ngpu+Ir+1HtOtsDmR+776MOLfX9o2AtpJuv1444T44aFSauqSZAy5CyyRbLICAEBCMrEIIICAQhKDPsaLc1Xl/bO6bEDc9y70Pfdbebsj7zrlpbrwF97/80G/NnT442V2eKhtXEmljmWhSfkfKySl+scel1WTCmSHUiOZAJXGciITJSpIvRLEGmau3qjX3B+rhefWBiEe/bOh7tvPdh7fFKnXW74igpueEHve8fxna5Lv/n4pfbi2m7e2Jrkt2+M4qntaVgeNTnULeo60yWos0iACBQylaAsRBGji5C6SvVkea579tiB+OD+pd7H9s/37z6xr//UzjRN+F1+9leeESC+xH/xu46aPwD+yYeeVZeyNjfHbGyOWZzt+5Zje/jhbztovmAyzd3mtDs3u9CbHJstp1u77aU+3bfMFvmOzTruH7eabZPUpUCTg5IDVxkDAegFe6Yn5mdCrvCap+NHK3V371+Y/8jJo3OPFZHNzXGaNG1O3PAVyTY3vDj/8teeXr6wWb9mZ8qrt6a6eWeab9qdpAOTabfY1KlqO8c2i0RAiChTKlNVYdLvV5tFzJej6wt7ZsMzp47MPHFoefDooaX+E+961co2v8svfOyZIDFvs5CyipTpDJvA9n/5bTeZ30e/8LFnFGOYb9u0ePHybrh0aac5sncw/f53H53smV9qgI4v84HfPltWVVg5e3F60+lz41Pru/nkVlvsn6awPycf7Lq8NG1yr0uOAMYYq4iaDnvl5uwgbs3PaLukPttsr39ezfjBW25afOgnf+St64C54QUV3PBiaW5YbT55YfLxlaXhQ6cW+vtW16cnz10av2prOx0d5d25hrayZcRVRhIMe9X6yvLC0/Oz/SeKUD7eK3wpKOzUnSbDXtF96uEL+vcfPa/1EaHNITzw5JZf94ql6pYjc8eqItwSggfAqGnTYw89tf3k3//A4+2rTyyExdky710c5H4V81993wlzDfz4P/y4FApVg0GwivDZJ7d8cKVXvvL44k0xcGpnN5ZbXW+cNsvNf/PR8ZqZrD30xOr2M2cupfm+GJRK3/nOW7tJo9VJ481xnR+ZHZbDo0vDpabpju6MmteOxs3J3d3RfFM3JVcJoNcrt1aWF57Zu9x/dnmpd65XzZw7fTpdfOihrZ1EaLjhRSu44cXy97/tYPr+tx2cADWw+6ufubRZ70xW8ySvpNj2Q1cXClgIMDYyYqbQ7t5Zrx7eV106sX946V2vWRkDBgzw0//i7mHpuDwse0cnLcduu2k4e3lzOrg8Lo5UvcGhmX7o9WKajseTMzuj+typwzN1GT3ul5xdGPjMbN8XgG2ugcWqGzhqKZY60qKjx/f351e36uHHPjc6UvYGhwtVRSTU5ydh/PBqvV2pvjxQu7Zvodrtmul6FcPjrzk8PHvHyeUW6LhqBGz8yqfObXzqsWZjLadHmNaDaVdHrhKGYenxvrl0+ZYDxdqdJ+c2bj86twOHanht4oavScENX4/88HozvThOFyaJy00mJAclorD4EgOizSFPGuXtSU4XNifplz5znrNrbTi7mnT+0k5ZhOqg0SvbxNvaxFuaFA42KQ9GozzTjnN/pkecrXJKTZ6kFMaS60mnSzu17ruwrU+GnXzPj/zv9z41PwzNrceWmBkU+c+845D5On3ovnN64NmaJ57ZqlLb2yeFV/ay30Twm+uOI3XS/G6dZ9ux+8MqhJmqyNPG1E1qZ8u8pVKXneJal8snK5W/8aEH1vzIard+ZnVSt1ndX/++Y/mjn9tqn7jUrY1qtpouPNTmqM5RPEdg0+TgcaO0PnJ+Yr3JTW+Skfy6fX1u+NrINje8tP7jPauzWzvt3qfO7B45v1af3Jj6xG7Lyabj1i5xsk1eaDNlkwp1LumVohczOXc4d44hd2URdnpV79lBr3q8r/pzc8X0sUMrvSdOHV18dmGmWv1jr18Z8fUrfvrfPHT48nZ3++qI27dq3ZEJtxodr5u8Z1zn3jRVoXNFVQR6helSInXJVey6XkyTnNLY9sWZnh9emQsPH903OH3swMzpYb947E+/49BFbnhJyTY3vHT+5a+fj5OuPTqepjsvrE7fsrrZvml9yonNOuzZadyfNA7JIYggssEgAAECC0x2DLhX9vJMFad7qunmnkH91L6l3t2H9g4/3ivj/Rub9Zmf+OFTHV+Djz58Udujtn9mrV5+7Oz4TZuj9N61cXjD2kQndmrmJi1KWQGCnCPOwSAkI5IgIbIl2SpcRNJCVU+Xh+3lo/v6nz+yd/ipiD/4mfueuvcDf+c9U254ycg2N7w0nr5Y9x58dnv5M09uvvXydvNHV7e6O9e20027TVicpFhOO1RnQxaB59gABgwSQpARCoEiFPQiHsZpmus1m3sXiqdW5sv75gfx1/fOFPcMq3Duz333yV1evPg//twDt26M0jsvjfwta2PuHDXhSN2GuUlHUSeDQQgcjAO2DCB1EhlAJoIKQgj0i5q5XtPunYtrSwN93s34N5udjY/mrn3gA//L953nhpdEwcvQB+56Jjz09CRu7dbF9vauxqOxcs5IwjZlEX308EL33e++Nb365vm8BOYb9ODaNNzzyPbyxm7zqrWd7u2r2+27V3fz0Us7ZtoRALJkyUiZkI0lLCEC4opkYaQoI1LKTDozxWHSalExvw7a5ZylKGlr4u4v/q93TX72r78j8QI+eO/5/umL070bY795Y5zftz7iNRd2tTBt6QVLFpaMMCFnwFgGSWAgIQzIxhjIGY+7SOsippz3j0bdYKA06Kk/1x8OJ//4Q2fW/8J3HKn5Bm2AHnhiO/zyr38+Pn12q2gSUbFUNeir6lWkps7taDcXhfJwpsoxhu5nf/xtiZeRgpcfHd8323v8zPimXvTRKqS5Vl2ZlSWJBCHgcV/pyTceHj4zhBHQ8Y2JR5f7s7+4vnrHucvTP355O73t8k4+sDVWMe1KuhwIAYzNcwwYLIRAwgIImAzYkEFREJRypUkbwtpuS5fzwdZ6+zSp6oWunZsbtn/7H9+9+tN/4W1TvopfuWftWNv5vasjv+vSTrhja6KVug0xZ8kSYPMcAwYMGMuAERnI4AAIKSMFWYWyxajpSB0zTTlzy3x/Nu9b6W0Kh3/38fMP/+BbD67yDViC+MbDg5mPqLupVHdLVlgh5JkieFBEFIJ3HNJqFbzei2G1KMK5H/+Hv3n5H/yVd2ZeJgpeRv7vjz4Tx9N27uJmOrQ25vWjOt6521Yr45R6toOEgSITNtfr4lP/+u4LgyIWZx589PLm+Uvj+ud/8s2Jr8P9z14ePHa+ObK6Wb9hdTt95/qub1nbwZM2OlNZQUJJUpLBPEdcIQtLQgCyEVeIjBSQAnLp5ODtSVabc19Rr0i4mg3t+aD2cqc0AaZ8Bf/kl58pdifc0iS+b6cOb7o8dn9chygiQTKyUJaRQVwlQCCwjAyyMRkhkFFAUgAHmgQpK+YQl0rirZ003thp8mTargOrfB2Ov+dn9f73v6l4w51H94wn3bHVurxzlPtvabOPKxVLuYvzXSOlNq62qfd0g850dfVkaLinHk+a7/lL/3bnP/+fP5x4GSh4GRmUZe+Tj6y9dmfKt2/U/ddu171jk2mcbdphkTMKAfdijj17nLZ8eOv+1dtnKz0yW4VHTh4aPApc4Ovwr//DQyvTFO88Ox6+anXaX9ydBqZdqUwwQsJgWzbCWJCDgAAEgXiOhSyep2wQyADKFKpTZn0ETdvOdXF8c4zjUwXdM8Blfg//5Jefmt0Y5WPJ1e1bk3zTqPZc15lsiBIIsIyFEEIYgQKWhIS4wjaZqwxO2IErpIAlOkuTzsRpO3NpM92am3y5CNzF1+nP/tCrBuPU7b/7nnOvn3TxXZd3y9vX6oXDXWYpBA1jG6oQgnKOSzn191ZluK0Pr+4xOdHvuqOLe2bu+eGf/OAT//Z/fm/iOlfwMvBv73o6bo262acv1cfXdnnnbq0/sdno+FZTDCdtUXRtdjbEAH3MIOTcTKbHJk17ez0sbutc7O+VYfL3/v0TG3/j+2+u+RqdX2/31Sm9caMp7lhrqkGTCnCwBChJGLItDJgrsoQUAPElkizzRTZWBwpSECCSIztTaJrUL6p0oqrCbb1Yfpqv4NJmvWfa8bqmC6/amsS53do4Z4JsZPFFBnFF4CqBAlcFsMERMCBsQ+5MQGDAWNCkxG6dirWddKCt07FeoeV/9sFnyz/33ptavgaPX9rWVju3Mm782q2pv2O3TX9ssy4ObXa93GZJWM4GYynMxxDn+xBap0kO9ZFAtS9LHbD2X/3EL2z8y596f+Y6VvAysDyn/ofu2Xjz1pjv2ZqWbx215bHG1VzrQl1q1bqTnUgZ3EbapBBcFkWI+0e56O2kotw7r40YmPyrX3vq9J95z4ltXrwq9+b2jUfpjsbxZE7u5ZwJgGwgWZgvCVwhi+eILyMcgmQbG8sgsJKFkI0tZQc6x37N8ORI1cVyEPYCJdDyu1zemiy1Sa8bT4s7dqflzLiGbCMyyDZXCcB8GXGVuCpgDDIWyBnZkLOtAAgMGCyFJgcah+X5fnHb6lbz2D/95dOn/5vvPr7Di3TLvvmq9uyp7br73q1p97bNaV7e7aw2pZhskMFgSwKyhVuTU+pRlkcoZ9Wnrnt51KvpfeKHfuJXnvzAT31X5jpVcB372f/3tF53YnbmvqfaE+MmvnOnzn9icxKObNYlUlQRUSKRXRsSGJpU0LjEjg6xLGqFfS1orp/Pb4/SZkQjYAcwL+DZC6vVXY+M9qY4ODohHWuteSECtjCQkTNgQJgABDAIsAAMCDBIYL5EYAEYY+SMLMvREMvG1dKY8uhCGQ/92r1nl97z6t4GxUrLl4RRo5Vpk18xbtKJaRv6TQdBNsoY8xwBCCy+yJgvMRaIgGUsIwMYnMEZCIjAcxxoc6BBczGGV03adHZ1J28DO7wIH/ytT/cfOl8d2J5Ur9lp9I6dprhlc5pcZ5vQAQZnkJACwthJbYIsC8VZxf7xEDJVKEoFrZ06snQayFynCq5j59a6sLWz9YqtSX5vQ//tm03eN+piTFlWSOAW0xoSckIADphMCFFSUNNmJnQzk0l3x9p22ihDeRo4C0x5Af/XR9b27Na8rsvF7btdMTPuIJkvMAiyxFUCCxwQV2SwsWy+QBYyYGHEVRZkg4EACJFli0knQhcGJtz06Nn22MWNrv5T717ZArj3qd3+05em+2NvcPPWqD48ar2Ycichg3ieQRYQMEJckQFjbL5ASFYAgTCQbYzIgEHGMgYSYtyIGMJMk7hjt+ku14kHgad5EX7xt9YP1Ln4tsvN/Bs32uHiqIk0qSCTCRhs5AACy0CHbJtAIjDtAIey6pU35d5wRMmB22/eVwAd16mC69ieuVCsbra3jBu/u826Y9QWZZ2EZEOrnBMogUEIGYyRTAhIMim1tLTlpE7Ht8ZenxsWBzIMArRA4qtY25ws1Emv6FJ5ssllvzGYDGRAmIBlwFwhB0CAucqAeZ4FFkagACCRMeIKA0JIxmSaFCk6hm3bnTq7Wj91ufAFYAvg2Ys7/e1R2p+JB0ZdOT/pugAJSYYICDBCyAKEEWCuMrKxDAgUgMBVwpLkbDBXWGCZK7Lt1BWqG/Wa1sfHNeeKwDwv0m7tfa3zG6dNd/tW7UGdhIAgjC0hcAQMGNEhZ5DJEk2ynVFdhmGn6mDRi/sHw2oRuARkrkMF17G9C3Hm9Op4ZXvqw3XrpZwtHBFBGMDGAVFyhW0sgzKZDllAi90V09YL21Pt3Rwz//CZcfWqI8MAJL6KjY2tqnVcSO3sfFX0ijZDmxM2OEhICINtDGBE5nni9yZAFhIgRBAYsLlCwhJCkPPsdDJ51blL00sx+H7gWYCnz6xpt1ExmhRFm8uQESZzhYOEMIgvMcJ8kWwgIxsQVjBCfJGEQxDG2IAABMkAxs4mTuswvz1iMYqKFympGGaHAyas5BwKZxPUIXcSCVOQicZIZJ7jjGUgY0GW6HKmSe4r6ODFzfrERz+33jx2brzxZ7/9iLnOFFy/YhHVn7Z5ZlynmbbLkYyFLQqeYzABCBgBxmRQBoxtRLbJmnQQp5oZjvPsfY+tzaidbt9xYk/LVzEeT0IiVoleGWRFiY4MGAiAAAFGzlxlnmeuEmCeJ8ACMFcJDOIKY0lIIIFddU27d+x6f5D7fMHl9W3GXWQ0nadNJckROwDmCwSY55nfTebLGGOQ+J3EFXIQMgZQRjI2ajozmVIEEXhxVFRVL3WaC10ciCBhRIfUAQYDDiCMLRNBAhKQEeaKzqLLIYYQD9SdTz67Ork0rvMG16GC65gNbePQtsTUBWwBEQcJbDA4IwfMFUIEyAJkrnBByrDbZloT+5N28fOn15c3L6+v33Fiz4QXYKBLmTpl2gQ4IQBjLL4aWTzHPEcWVxllm9/N5grZBksSEFrbG8rdmpQbvowNbZeZtpmmM9niChnbIIT4SoQJPM9C2Nj8DjZX2WQjGQsQQpmcO1LKyXLmhelTj6/OLC4Mh5ujVMSukCSMcRBGfEkWAisBxgASEMABCGSLrBBjEfel7OPjOj3Spcz1qOA6ZkN2IGeUHTABE5DAJIEtrjBYgMACzFUGRCaSDcFWl120bSqmtQMvQBIyZEPXmZTEVQabF0MW/z82X5Uzz7HBzti1cB1w4gskIQlsyAnbPM9GvBAB4new+YpshLEECBDGNl3O7jph88KUkmMRQwwykrjCBDIRyUDmCtmAMQaZ5zkQKAhEsqHJ0KaQMG2QE9epguuYJIWiCKHIQTFgIsaIDBjIoIiR7GAcjCxhnudMCJleEej3lIaDsH1oX7V5y95Y84LMFUKIAARMAWSuHSMydnY2yqSS4OUcyhWRe3xBlyHbVDEzU2WEmaZMZwMBEN98AiJCwgGcsQFbxrwI+fjBmfH27nTSNM6pC9gGR5MLW5ZC5nkOCMAJkQABgRBKokq1qWZ73DSXtsOjMQw/dvP+8uyjZ1uuRwXXr5yzWzmPJG/ZXs5gQ8QZKdsYyEBAyhgDBhkQGCwTlZmpInMDtUsz5c6dt+3devsrF1tegHmOeF7AFIaEyIC5FgwgYzImy1AClaXAFwyHPalVGExC6HWmTZlaBgPiGgrCwhZCLmLIVRVTlM2LcGB+ph2NJpMux3FOVSOCQ4gSAjLQITKQEcIGAQIMICGQlAkkgrpu2ujcwaXqsXfccWj9HXdgrkMF1y+vb093u9HWORoey11vaHp7BVFONhlk5IRIBmFJBiwBBZJEzsSQPdsTy8MwWZ5h/OoT8zWQeCFGNrIdMpmMsQPYlrK4RiyBrigAdWQ2lbv1IDd8wYH9i2FUu3d+2lUap2DABAwI8VIIUh4OimZxLkyLQOZFCrmdKntdaKuIxUJWAXTKyMZAJiiDA0KAAYMCSEq5JpA9N0xaGNorc9E3H5rJgLlOFVzHPnbPM3WldLrIxSerGOZme3GpbilTZ4wAYTJyBowkUAAKQBIiRqiim0HhS3O9/PnZyqsL/VADmRcwHFR1m8N6VYfNKqfU5UAHGHPtCANSoIiBMjIpYniyV/B4Ie/wBXsWB20Ypa0Quu1AasUVAgSYa8YgQRFMWTiXwbtV8E4R3fAi9QtvxswjfcLBWXl50uVBnTI5Izta5ioZY7CAgAkIKGJiUHZ5YajRvvnw5Mp8vDw7KBPXsYLr2KGVYV6suidX6/LDnpb7+o1fvTlisL6LcipMiEZJWR2QQCJQEVTJRKIyw9gyU2pUKH+ihA/RNU8AE8C8gFfcvH9rXPvRtOrjk43uDpwXRykoWYC5ZhyJiEE0Mz3tzM7OfObkSvzEbJXX+YI/8eaDu//pM5ce29ldu7lwt1UREaWNEFeYa8J2kNWvRL9MXWoma+Ot+lKUp7xIr791z9nNSfyN0xux15uMb1qbaG51rLLLCnJlG4whJEkJCOCAswjRzPUDe2aqZmVe9x1cih9emi0enE67XcBcpwquY3//L7/NwNovfvLcI7/x2fV7B+P0Gtmv6DrmR00s21wpK4MCpkNADCVlKAgSRXA3LMLWsODhknx3j/QJ6vY8kHgRvu2NJ7efuTT+/LmdCyeGxeRi3YblicqiUwgCcw0YgSEAgzIxV7E1N9N7/E9+zy2P3Xagv8OXpO99w76tn/vg6XODqDNNEY8XQfNtUIltrhVnguxegfpFGil3j6Vm+jDkLV6kH/uhN28Dj/7kzz24qI3mcN253Y06qVwuZFfKjkpZQAcSIYhIRO6oYurm+3G0PBefWpkvfvvo3uqug0vlU596fLt57fF5rlcF1z/PD3o7h5eH98z2u7kyNO/uFX7r5d1iaX1cqc1ZksgUSKYqAsPC9GOminl3UPDRYekP96PvDvip2TKPeJHecvNwtNvo6Wa0/XA/tw+WVLNWPGxpgMU3XQgCcIKolGaKNJ2vvKaULt92oL8FZH6Xlblys8t6OCnu32l0ezJll1A25pvOSB2BTInpibVBv/jY0YXZu+Z6+QIvnoHpwT29+7vs3Z3J+GLu5R+YlLk3yaE37aSmK0iOSNArxKCASqYXusnykHsOLfV+c89c+VtlER46sFhtvu8ty+Y6VvAycHkrNW+6efn0M5fH5LzZZqfdJoVjndnTtHnWTlWIimURXEVSP+bpsGTcj3pyWIYP7+n7rmHRnv6f/ty3bvO18R955WD0878wOj1bhk+Pcm9x6LAcOg26DmVj8c1hAbZDkHo9MVuFeq6fzyz08xNF6NaBzO/h8HJ/o265t87eN2p83DC/M4VsIRkBmBfF4ssYAVhcYSAAIUi9Ut1cXztLQ57ZM9t75O/8xdsfq4gTvjb5L33vqbWLG9Otv/azn+zNFSz2QrzQl1cmHcNpQ0g5CJleJPejm17wtB/zxcWB7z6+t/jtI3v7n1vbbta+5bblzHWu4GXgh96+z5/4/Gi7KsJjQVwqAh8/uKhXrsy2d+xsbx9rmunemdl+f3ZmkGyPnLk0Nyw/vzhXPVJQPDLdHp2Z7I7GfJ1ec2rPpY1x+FharfZqHF+3NfHSZsrkbBDfMAdjgAyFxNJMZM9MGO2ZjQ+uzKR7y+h1voI/9uYDa09cnNyz+fDWoWlq35kR4ybSZECZK2TxQixj8WXMF8kCg4LoVwXzQ9UH9oTTR/aER2Z74WJFnPJ12r/U70aj+oGy11vbv9Q/0R/0T7QpLE8bD1KmzIbcpalTt1UVvjTTL88vzBTPVoUu9KuwW0aZl4GCl4m33DrTvuXWmRb2b/9v/+Gxc71Kl3d2p+efSbs3bXu6smcm9BaX+rntPM5dvnT0YO/x73nXvqePDXubcGLKN+Cv/OAbtu9+fPTExq+vPoDah+zUm3QsZlzmbNsCRcAgAwaMLECAuMqAQWBAFkbYIJkYrV7pNNdntDDUk7OD8tN75ov7BiUbfAV3nlqa3Hlq6cynn9q8f1Tn35w06galjmYzbA22DIErJAMGA4irDGSEAWMBCBC2EOKKIkpVQR4WeTosfGa2V3zy0PLgY7ODcB4w34Bf+Onv2PzFj1/aikEXupRPb4+axa1RM2i7XHYJT6dt3Uyn2/sWy8vve+dN68f2L0+AjpeGuEpcZcC8xApehopALiIXisC25IeFS4kQBEEkiyaK8XwZJ0DHNy4tzvW29sz5kRj1ocbk3eS3WXmhbhJdKrCjCVmoAyUwgJAjIIwQHSKREShgBA7gTBDqlzDT83im6B6Zjfm3CuvusqgePra/GvPVNYeXqwck/vl42pxd6td/MhJu2aoLNzkA0QihLDkDNggjREJkICObDFgBXCBHbBNl+pWYqdzMaHqm39WfmWyXvxrj8LdfcfPeDb4J3vfWff6Ve9Z2gqjLSFkEQg4EG8dAjnJydoOrFsi8dAqgAiJgoAVqwLyECl4i/+iXTseyjLObm6P5Z85cmt3cGveys8qyzPPz82lubna0stBf+6s/cPMukLmGfuz7ThmYABNeIrfvL7oje3x22OPuzSnVuNNsGXjFpPDSpFEx6aKShcjGBjJfZK4wVxgBwgQgKkqUIdMvUjfTD7uzfT05KPNHhzHdVcHjP/59t+3wwvxj333LGrD75/+Pe3tdm/cKdqV8fNyW89NUKtkyLQYkMOY5BghgQEYEIEqUBEViaKlim2eKNBnGfHZA87Eqj+6abnWf/fPf8ZaLfBN91+uXW6DlD4Af/Fu/NB+K4tDM/MKB4dzcSoyxj8kxatQvw8bsoFjfu1StL84W23Wbx3/q2w5lrqGCl8ioTmXRcWzc+JVNDsc6h+VsBTm2bdakzZztnO+554nVJ+68eXYsBonrzOJQmxtjHl6ZjR5W6rYneWd7Er5lfRSW0kjUXQBHMIAQV4nMVQIiWIiIVFBGPFc1eaHqNuaH8fNzg+ITVcEHBfdWwVt8bdqj+/oPDvvdeH2nOzM/zd+/PvWtl8fFYNrmmN1hsGUgAwICdsFzDEFRUQUKBVFiEDsGsWuHsT7bd/vpQumXgI8G0hrXMcXisAl/dHuc3rjVNidNmJfoZvtxa3muOter/PC4TvfFyMNt56eBhmuo4Br7wZ/4YJHbdl81M3tyMLf4xtbxNZvj/pFRVyzYCqVDN5mU05F8YdQ1B/7dR1fv+9V71z/7N3/gtnNA5jry/m87kYCtf/rLpx8f1UkXdlJTlYxT9i11Xa9UeBE8zM7BQCaSiVxlAolARkAMTlUVpv0ybAyinpkt/Phi348uDniwjHr07/7Iq9b42uW//UOvXAOP/od/fn9cVeq15vWd88mmTHtzTjNdTr3ODhnJBOwIDsiZoEQREjGQRR4VYme2n0czlS6UKT0Y28mnldP9P/9T332e69Sf/Nu/NJuIN9Vh8Lak8p1dql7XpmJ/duhhM2rDZNzl45vT9uDmpFmZ6YubVoaXgIZrqOBaU+wVlV7ftP7Onc36jRP3Tmw3/eGkLWSCyoQH6jyb87TL+fUpc4chPfj05a1XHVsZAZnrzO6o3aQID504PH9576T7XGjX79R48qa6CLelUB7qsmY7h9hSqKMkEwhkCqZUdI7KXVWE3T1zXFyaqx6tYvnhCJ8M+JIz203yLt+QtonBDwDnl4a+b3EwfVebulc1XXd01OS944bZzmXMKkkUZENBTUnjMjhFeTe6O9NTemplcfDUyvLw86kp7j/7zOTxzY3tDa5jDsVhCH80qXjniOGdk9Q7MG3Lok0ip2yRq7JIK3tm8+L+Jh+aH2hncVg8COz+xgMX8re/+oC5BgqusWNH9sycXR3flrrw1nEbTm13Whi3UU0uwIEumM6my8x3uds36exQxMc+/NntnY9/bvTIj37nsQ2uM//9f3GqA7aB6ZlRs/nPLl7YHG+MVhv1H81lcdiEfYmw0DiULUEmSEDpoJLQBrxeFb64Mpsv7FvwE3vmyk/+2ffc8rlhL075pqjy3/2v7xwBo7/1Lx5Qyl2aNOnJUZ0PBbwSFJassKgY5hKKhlwgV1Ib8ZacL6mbnunRPHNgtjhz27GZswtzK8/+8R999RrXqZ/7yIXe2uZ0eWFl76u3Ru3bUhNeN2m0b9y5rDvTJpyzsXOIKfdDNCGE3qROd6TRpdf/zX/wTBql4uy3v/pAyzVQcI186L5z+o7XHQoLC7OLZzd1U5t9cpTD4nYT6JLAtuhINikF6ha2p53mGy8vDPz2jZ2uHk26dWCD61e7Nc6b09YPKsQnj+2fnV1cmlvqsm5qOt9Ud5ppU47ZRphAjIH+pF/pydlBfAq82XZ5t015d1yPm2Fvjm+2bJ3PZitlPomo9syVwwNVuRhCcVziqMl9RCpjkXrFzKgq9GwhP7u5GTcuXtwY1Z3rrnPbdLnmOraxOZ5vu/zKajjzBrp0e9d1h6ZNipO2ISsbiRDAJMAetYXanSJMi3RLLJs/0oR23JIvAS3XQME18tDT0zgaP7u824TjO111cKvx/LiFLgdnZ0S2yLLBFNgBXNG0eWY06Y6tbTYnisAM1zffsbff/sxf+JYW2AVWL2zWZz/5xNb53XF7ejxp+5NpF5yzkDAxoKKe7Rfnv+dN+y8eWOq1gLmGfuZHX1UDNV+ic2vT3q/ec/H89qR9yjlXISgN+kUeDsrp7LC89OabF9YOLPYawLxM1NNpqBO9cROHo66anaRQNKkm52yUkAIgEIBpE6QUNAzFoVQM36D+4NE3n1r+JDDmGii4RrbGKTyzmvdPG9+y3cTltYnVdkI2ISSgk5wRwjKop6A+wTmOR5szq+14NioXvMxURWidfXnaenPaWk2HskGAMUFyDGp7ZegA85LrGE1HTbIvtB2XU5ZiALV2KOyZ7K4qQsfLzHS8203auLs1nhltTmMeN5CdER3YYDARJAgZGwMolotUMyfiMBw6sG9+BrjcGCphvokKrh3lTD9Is1LoORsscEZkpISUkQPGMiYbUjJdl8tWqUrKgZcX75kt/cfftL8BGv5AKnzq8LJPHV6ugZobnlNVVegUqiBVOaOchS3sgAQQMBHZkAUGG5wzzp1SJ++Mmg4wIL7JCq6RMoqyUFtETweRbljAxKZNBpvAFcIIENgkdySSjZNECpK54Rv2rz5yQTujmvOXttjenQrD0kLfd9y2l5PHFnnjwYG54RsyMzsMaukNd0PVG2XVykgGAiZgAjgYCRkFI4lM6kY04/ONu9V7Hml2+c4jVMJ8kxVcI4Mq5KW5uH5usznTi2lrpszukmmSwYFMBWCQMnJQVi8mekVyVBrLeQS544ZvyEce3iqP7h3MbVS53+5mhaYRwHI/drfuidPXHRxMgQbI3PB1W5it6jD1pX7Zrc710qTrEuO6IxMkRxsZMjhLMkU0ZYSy0Nky+NOV0hPbO5OGa6TgGrlpb5l+4FtXLv7UB848MSi7i3P9XDcplXUSXe6RXdoIkS2SymBmepmZMk0r8nnl7qzIE274uvz1f/qAfuu+Db3/PUfn5wblyfG02XtxJ4adSV8ATVlNP3O22TxTr6+dv7h96Wf+4a+P3/uOm/2P/to7zQ1fs+9549Lo00+MTp9erR9fGnYXutQd3p6kXtMVMSMLCCSJjhAy/dIMe3QzVfnk7LB310rfj467ouMaKbhGTh3qGQbTXqnVvQvF6UEvPxkKnVBkdrsOmrZBNsQgZorATJncL5tchfZidP5tOf+WnFe54esy2y/3vP4VC6/+/NNbd3SEk9MU9ozaSk3qy8CgdntxtLtbcfnCdGfzyW99/YHH9y+VTwJbgLnha7KyuND+kdfGrU8+vvOkCZ9KWWXdcHMZtTRJociWCkEhUUV5bqDdpTk9PSjDfXOxvH+pmpwNXdFxjRRcI689sc8ARRF3jx8YfG57kj8VylYEn8w7oUq2u5ypolkcKs+XqqObHTx9SOQPhZTu+vmf/u6aG74mv/CxZ4oiMjNNvKJN8X2jOr9zq+4OjLv/rz14jdXsKg87/n+etfbe7/Xc58z4eGzGnhmPwYCNMRA7xFwKCVjQkIQAqhQRVarUosqN+qX0kjao4UtbqW1apVLSfChqBSiJqjQIggIUN7bBxtjGxh7P2OOx5+Zzv7znve3LWk81dqWSwmAbecY95+zfT1sFCRWei0ZlZWVRhoxyWUs9nrnm/cPYkG8+vvpMXoTBXW/fX1F7VRLfKeanm+e6rXiPMigJoUoTPbxR6GSIpImoZao0veVzE3L6mnn93kTLf38waDz7T//WW3tcRp7LrNlw48zLE6IxDks5bcTrVZltprGVF5V4iTbbTqSb6laZy7N5Hh41Cye/+Pm7cmqv2vdObM9eWBu9e1Ak7x2VzXePK44MyryZh6jRKowIYlQSqLTC4xpiU412qq3mtnS//p2l+w2+e9fb929Se9X2Tzc2BuPqh8PheFTkbgmnR5OSawxppOqKRBk3nG5Od9zp2Y48MdOV43krG3CZeS6zUR7K1fXi1L59nQu37m8/NhiGhcXV8cHN3nhmczvXUAWmu6qtZrqWF+1Hnzq1ffrEcytjaq/K/3jgrNs/lbQHeTjWG8WP9fP4i73CTQ0q70sLEmNhYgVihkikwBhhiGQN1e7VQZns5KMFsyINITwLbFJ71Za2qpGFcHb/VLo6001Orvft2lHBEXW0GlkybDcamxOdZDlNZGm7Xy6fXR6NWs0kcJmJmXGFCJCdXRm2HjyxPvXC2qCzur4l46KyiYmutlqtoaos3v3R63vUXrW7f/+RKVW5fa0fP3BhM36ol7s3DUOTwhzRcsNK1CJiEcEwwFCQRESbNBJiNx0Pmy5/sBUHf9qOg/uiyNNf/vxdQ2o/CwHcl799ZnKjX+xzXpNuJynnpxrDt1w7sb1vIhsBOWBcAZ4rxx5dHueLK3mx1Lfe+hDZGitlpbhcwJmpSqT2MxkHnSjG4c5hwUcGpbu6l4sFKcQEg4hgCCAigCAImGJg0XIGpemoCq2ut6ONTH5J0ywALwBDaj8L+8ajF8LaIGz2RvScg8KiVVRYMoqT/WC3LbSMK8RzBd0y3zDmG8ZN05Haa0UBv3//xPzx57ev7RV2TR5oBsOwaCIACjgMwwxAMUAAM15kBsFUNfEzWbN5Q5plj5tJSu1n9oFbFuwDtxCAwOvMU3vVvv/CUADpbVe6up7LytpALixt0R/kMZqF37v7XcYV8sj5bXfkqmzCebdvGJKpfhUalYFwUQADwwEOwwDBUONFUbjIQDCUaN5pQxM3K6lNYeJ4Hfy3/7UkZua2tsd6YWkLVWFh/yTTE43YbVicbmN3vPGAUXvFPLVX7e1XtRRoLLeK5mmLTQpNB1tRrahG0WwVGHOF3PvQOf1Bg+7aqkyFShpmiUSDaGaCiAggCmIYBhhmJgIgAgYYCGqqTsyCy8s8c4TETITXwcJ0ksVo0ylFq79p4hTmu872TSfDA9NZ74aF9hiIgFF7RTy1V2RU9OUL31pxZ1fydHIim5jopPtDlLnhKE70+lVzfTNxg5GtlUV58tc/d8/yVCsppzppKRD+1d+7zbhMXlge6oaPzeGw0SFmiZhykRF5kRgIghgQDAwRAAFUQAFMUEEdwSLjPAhVJYZwpQzynvzB11b90maZNZvpfOLd0dG4mF3bElVR25YiNpZjL4T1RQvlqqrbSLwfmVn1jz5+2Kj9VJ7aKyHNtMNka2u61w5v3dzK3/zs+eGRfs78OLhGETQpy0SJbDWseL7pOOE1PpFqeF6ENaDgMpmZaUsjIV0P2nQD9QBCRCQIYpgYiJlgiEXEIi8SwSSaiQCK8ZJogRhNg5gYV047m5BWtnmglcZ3rfXKW5b6+fWDPE5XlSIinN0uo5N87MJ4o5XGk2+Ybz2yfyp9OgR7Acip/VSe2sv6t//9hHfC7NrQ3jgo+OD2MNyx3quObI+ZHUe0jCKG4nHjKLoO7kkf03kf0ge77fSJ+54brJRVjO890jVeY7PTLWtlEl7oV6V3IYgEE4IIESOC8BIDMRBTLjIMiCACYmCGmQHRvJcy9S6YcUX80defaQ7zMLO4xS2DnI9uDO32tX440M+tDWKCIBLwhJhKHJVRjq/0bSZIyJxa/oVvnF5e78f4Wx87bNR+Ik/tZZ08N5gQeF+/lPevjvXmfs6hsoiTVSVpaRAMQFCkOcTPtzNNyNKpxNID+5pptrTcf9ywZejmvMamO0m1b9KvPvbc1jln461UYqVIAiBmSATDIeJQFTAhRiNaNDARiwiRaAHDSBzlVDvtTzYZRiNweQngFtfzhcWN4n0bI3nP6sjf1s+5epjHRhVQwyECQokQnaomg6DHCsg2x1XnmhnHqORxVV0Ecmo/kad2SX/+4LJ89J3zFvHzo6K6o5fbLy334r7NEZkYCGIGmBmGGQaKT4PYgbTU/Wlhre1RtX1msT822AZyXmM3H2qG6+an1v7svqXzLg6XUpGe13TKqVOLiBkGAigiTkwww8AUISJcFHEYXgMt7/rTneTcXNctx0jFZfTtx5ecU+kOCrmun8v7t0b23qXtMNMbk6oZYmqGgESUCgOieMbBTwWTmw2T2VbVW9sKozKyAeTUfiJP7ZJOXeinf/DVwYFGM33LypAjvcLmy4osRkFEAAExg4CBCIahMqoiq4MgIYYDKdyej2QDOAls8hq7bn4qAkVvq7+h1fh8SnK+lSZJVJ0YF1BWxksCZpVhIBgIIghmAErmYbIRmWyy1mnqD6a7yckQbcxl9NjpQQYc7Ofuhl6RHOqXcV8Zgo8GmDNBMTGEiGEYgpmjrBzbUSXVeGCrX7xDQrwQjMeoXZKndkmjImZV4Cjo20YhubpfxKyKhgMzVFAwAoihiGAgJlYFkd4oohYnJ7zdKIGTqZc2l9Hmeq+n2FMJ8oamjy1Ta1sUFw2JZmDRYowIhnCRAIqoiIrQTLWaarE12eTpdkMf2jednCwry7mMtgahIcJ1ReDG7ULn+gU+WEQFwxwmAlKBRIiC4BBTQlQLERuXcWqYh2Ne4nUTnbQNrFD7iTy1SxrmMXXKkSrIW8vKz40KowoVEBHMiAACAgg/QsyipwrBj4uyk6pNTrTTLuCACBivMbHQF+K9qlY0NJ9W4jxZ1hF1OiwjZUAkigkXCSaAIN4ZzURoN2VpuuO/N9uVexLH9yY6/sxoHHMuo6KiCRwNkZtGVZzqF5EqKuAADxYNMQHDcGAeM2cGIlJJtCorAtMRN78w39kPLJ/arvLDXR+o/TWe2iVVkcSM+Rg5GKLvlMGIFoEIZlwkvMT4UYqiYKJVjGmI1kzTpAVVtro9zue6ncBr7Iu/++EcOPPx37knpBSHVa1rmhxEdTJaSBRS9S4T1GGGEUMk5GkiZbfh8m5Lj89O+G+/Yc7dF4xTv3zr/j6XWTRLgP1mLJSBZl4JgiKoGBgvMjABHIYDBMRMxASBYNpAXbfZTCYCNMdFVYCn9td5aj+VYQrqBCcCIAGTKBKjAZgYCGDRBMFMAMEAwaGSJc6RJb7RPL8xSte2QzHX5bIR4gZmX/HOP9P11VuzUB5pxmJ/SP2CpJ2DIknXKiOGfEjIzzUyzs1Ot89OdNJHuy25t9t0p6vImCvAQAScIc6ilxjNVBHBEAJggikXmTkuEgkiJlh0Birioqp3elEANaP2E3hql2RmEWxoWF+E0jkhABYNEwDDxLhIEDAAwbgoIiI4p8GrBEwqUQ0Qjcvoj3/nfUPgic/8+/vOwvh8kVc3DENxdXDt62i5N5r6uVjESCkrUpYnJ5rVM4cPdJ9duKr1DPDMb75noc8VokIFbAqy7kTnErG2USFEkAgGmACKoUBECAiKWYpgeEcQpSiDjVLIvYpR+zGe2iWFKlSIrYUgL4jGq71nOoQKs2AmYAACmACCIQiGETGJiFpIHAOvstEfhbWFyfb2wiRXROrCCDhpGl7whHazoVPtqWS/T9K2lZFyHLaHPV1JJK63U/qzHb8NjLmCEscYeFaVE41EDnSyOD0uI1UsTYggilmCoVwkGCIVYg7DUIHExVzMtlY3RitA78aZTKj9GE/tkpRYOuF5s/iUk/L6zMWrKymlsoChIAIGgiA4EMAqVIKoCySeYZZwrpFwNi+qTa6gf/f37yyBdWCdlzggAzwvqeCGHAi8TlqZjgVOJc6Ot9Pw5rIK11QhaBUiYIBhCP9XBCKqiJcgqZN+5uxMqnZ2dWO0yUuM2o/x1C5pYTYbdxr61Nbz44mM4S0NiW8cS0wAEVPDBAQERdUJGBaDea1oeegmst5p+B9Md91xgyGvrwCMAOElBhivo2vns7GKPL+01T8xmZYXqioe6eWxEypRNUVwBoIBQsQwMCN1gXaa00ndYrfhvjPb1R+GwJjaJXlql/QPfuWaEhqL/+S/PHGik1ZPmNmhEOyAoO0qig8mEkLExBARREAEaSXYdFPGU013ttNIHpqZyI6bMeT1Z4Dx/4lP/sKBCnT9+PNPnepn5UPjyibaKceiubkQE2dRBQHBAENF8Opo+Fh107jVyXiqkyX3H5jKjheljaldkqf2UzQMqCY76fIhdfdvDaq03Sve1RtzpF9od1CSDPNAFQyzFOeUzHkmWzI4MKlnp1v6gyyRB5upOxGNEbX/RxKBYqrjz0SzP6uoVo3w8W4qt24VSbuI6pQSJSIiJM7RTIRWYmudxB5rJdwr2INzE9npjX6ZU7skT+1lXT3f3r5W9YfnlgfmCMPE2UqSyEJaykwzkU5RWVKFMjjVvN3U/kRLz0935Ml9Hf0Owum7/+Yb+tQuxe7+5WNbwBOf+69PVBLDlBPpVyIHkkjbYSjRBCVNNLQzP2qn9lw3iQ83vT1ACGc+defCkNpP5am9rCxxhXNyrplqf7abPJ+lPDBZuiOVcdSkcWQ8Lqe2NvvjGFmcnemcmJlsHm/4eEIknAHboPZyDKhU5DmBL6XOvjPbKG4wsxmVYEIEhMS77W47XWqkblFDtSQWVhGG1F6WmBm1V2qsoP6rD61OnV4cXzso7LrSONzvjyaXF9dzq6rFY9fPn3zrsYXnvHcvfPCtkyNqr9pn/9N3O8BBQyYAMwQwOk2//Y5jkysfvv2abbAKGpHaK+KpvQqNCJTNxG96lbFTOxsjD6lIomIxiuWJY9BIdZR4zan9TLzaCDgL5gzFzLhIsRBNcsgCYNReMTEzarXa7qbUarVdT6nVarueUqvVdj2lVqvtekqtVtv1lFqttusptVpt11Nqtd1LAAWEPc6zR33m3/yVrvVyCThMFWIgVWNh/6Rdd2jOuu0Gn77zgFHbcd772fvkYz+/oO+7ea7ZynyjNyyLv/j+yuibj6yGO26cppE4+2efOmzsIWJm7DVf+Orx9H8+dOZgXtkbovopxHlilacaetcsTG288ehV61OTzY2PvG2+T21HOb00SP78gcWF7VF1uF/Eg8MiTpdVjCHYVjPRC7Od5Fw7dUt5Fbf+8SdviOwRnj3kh2d68uZrJ9Kp6e582my/s7+d3xmiO4Rok0jPxJ8blMnp1b6dGMXwwz/8y/Ojv/PBqwO1HeHex89kzyxWs71RfHs/54Obg/CW7XF1FeC96pqKPDos5f6IPGCmA6Bgj/DsIf/xT4+7xNmN40ruWMubt/dp31xUNh+CJJiM0sQdYpjdWC7Jkal2SG48kOQPP72xduvR6ZzdQwDhJQYYu8Df/tf3iSNcF/B3jOj8/Niy2/KSa4oqTpiJ8yrznabrFLhuJ1M/1472+1955kxvzPZnP37E2OU8e8hqr/BKvLnCf2I7Nm/sxfbksLCkKMxEfLeJ28covim6eFiFwajQ9fMb+ZO3wjI7zB9965wAsrg61gvLua71ClkfFPL+W+eStx2ebCVO7fnl0fDBp7byMlj1n+++ydjBrlmYdieeXT1WhPhrG2V183qZTpeBhkQjRjFVSWYqPWwq0ypmoWHjvLQyBBkAgV3Os4cMgxclzlXmD4+CHBiWYnmFhBgRqcjLiq1BwGKc6aTuprV+vFBUsgYss8PMdFwCTPd6clXq7FAzZV83avbA8bXssVObaafpq6l2tjk/mT4jwqPABjuXvuvmq6ZOXiiuGfbD0VHQq0dlZVU0UfPE6EyC062hiUg1kSlHxk15m1eeH5d2ij3As4eob0hRVWkZtT0uhXEeLFpEpUSIhGD0hkGqQLKvmx4aFvpmQR/+F19+Wj73yaPGDrLcC62yikc3h3bbsJTbx5XcUEbtFiGm4zJKHkKuGtcrC/eUZViV6d/c/Oef/xSf+8yHjJ2nkaZuJml2Z4pB3ikJQIWIgiQIDqLaYBwkhEqmMj1QVO6Gwsm+sjJlD/DsIT/3xqnk3ic3vAVcMCFGiEQTNTEAE0J0FAGNpi0zutEsjZGdRAEfxB08tTh+z/p2eO/qlh7pj5N9lblGjOaiGdulhF4V9mWuDEk1HH/ytz59YDXPHgbW2HlUhTTzLkmdd04iRsRMTEQEBEMIJpRRNBhNMybMLIvsDZ495Krp1KeKFmJRMURABDEVJDpEFOfAezNRHYswUKFUYce4/9SazxKZW93Ij630wp3r2/EXlrZJ+rkzUa8IZsEwgjAq2x1f3jTfsJlGlk51uq1VoAdUgLFzRKBMxfKm2ihTcKJEEeH/EAEn4L2YqgxF2BSRkWLGHuDZQza2RpWnGKUiA6/JtDhEzIviQB1eHM0sMtGKZSvjfCORp5upbHz2V683dog/+dpTLYGbVsaNdywNmwd7uWajMlBFAxSEF5lFoYqUIt2xZelY9MbCsmNfuuf8ehls8TfefzBn58jLMq6Xw955F6ozqfiJVpJ0x8H5MigmTpyKNH1FJwtV5vTJRuK/NdFyp/rjGNkDPHvIoyeX88TK5YZzzyYuTVMXJyIucTgwZ4nXONUSN9OVrU6DE92mPjbTlhV2kMWVQUOwo1shvnmjyKb7lSPGiBLMUAwBASWiGKCSxzQr8PuD6E0vbIyXorEJ5Owc4fGnFtcHm8unxNwjmUw0O0l2g4q2R2YhYCRqNpFFN9MMq53UHj4wk37jb9wy++zDz/Qie4BnD0kcVTv1j41K+ZM8lj+n1n+L+mS/V5eGYEOF9eks2ZptJc+2U7039frDybaus4PEGFUgi5FGjOpiVDBeZNFhoggGGBdFgyoI0WQGkTeNqvi8wZPAFjvI9x5+LjqKp4XsK16KUVsGMXXMtKCMEXWq5XTTreyb9Ccm2+7++an0zE0H2/2bDraNPcCzh7z31v3hLUdnn7rnofObj55Y3RgS+r7RvN4laavK802rinOzjfa5+e7UM41MH86LcOajt11TsYOIiAkWBKlEMBWIXCRgzjAHEgUMpMJMCAHMyMDmIjJthmeH+fLvfsiAF379t7+xkTEiY5SZMotQGqaqmu/rdE7dcO3847PT7aeG43IbMPYIzx7y6Q8cNmB0/sz6hSeOj7/bdLLUbcv+RsM1hwPbHvbz1YammxMN22w1WPm7dx2q2GHMEMAZ0YcYtIqKYLxEAMHMmRDFUDCIJlSBQYxyzossRijYoTxlDjwFFCI0RYhmJk41dJKwdnAuWzp0cHJrdb0f2EM8e9DKoCq++cjyqd+4603Pf+TO61rdVpqu98bjL3395OjE+VGc2SdExdiBnJMgSF9NtryLhbdIDGAm/ChDTFARMRIHgm1a5Ml2IqeCkbNDffFfftg+8dt/eR64gCEAZkaMyiiorfZKk6WB/do7Z4w9RMyMPU55iQHGDvcPf+++rgo3LY0b71sZNz7Ry+WW3jAwKoRoaUQUwYAoSCWdLDLXgamm3HPtXPoffvEt3fvyytZ/5Y6Fgtqu4alFdpFf/cCxUTvVE3/8wOYEa8U7k0G8PlTSDEEkWFRAhChINFUJrUzCZCv0J5ucbTfis3e986olwKjtKp7arvLuN80FYOtrjw1Oz3bCXyViiVq8sZPEA8MyNKqAgpE4rJGST7Tk/HzX/2CqLfc5J8uAUdt1PLXdxgDzVi5fNakPNJXSxbDW0HisX8QDRaCJEVLHoJPZ6lTbHb96pnH/1XOtRxB61HYlT21XamcyBDk5GrGeqP2g09RDEx1/DNEuIpsW44pV5VKitthM9IXpbroGjKjtSmJm1Ha/3/+LM9Mi3Jilrr1/trE6P9tcVpW1t1/VzKntep7anjA74QeCnGxlzh2Za4yPLbRyoKS2J4iZUavVdjelVqvtekqtVtv1lFqttusptVpt11Nqtdqup9RqtV3vfwNe7ets/u75KwAAAABJRU5ErkJggg==",
                            adress: "addr1qynq54axgrhv8meegdpegm3l2nd2trdz8w6xfucdjnm3kf3xpft6vs8wc0hnjs6rj3hr74x65kx6ywa5vnesm98hrvnqeurgw0"
                        },
                        4: {
                            ccurrency: "Filecoin",
                            image: "data:image/png;base64,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",
                            adress: "f1xsux2m2erdfcychbnmt4acq5q23qwxh35s4j63q"
                        },
                        5: {
                            ccurrency: "Dogecoin",
                            image: "data:image/png;base64,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",
                            adress: "DEywzYZse6NmGRq15aWy1dUcdn3dA6SBw6"
                        },
                        6: {
                            ccurrency: "Solana",
                            image: "data:image/png;base64,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",
                            adress: "6WEh3M892952R4A7F8yo83oqsiykdBCZvqwVtsUwLweR"
                        },
                        7: {
                            ccurrency: "Cosmos",
                            image: "data:image/png;base64,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",
                            adress: "cosmos1a64k4ueqrcuv4x4k8ds7twnla78e7xgffgda3p"
                        },
                    },
                },
                // htmlToHeader:
                // "<style tyle=\"text/css\">" +
                //     ":root {" +
                //         "--currentTime: rgba(255,131,196,1);" +
                //         "--color1: rgba(255,131,196,1);" +
                //     "}" +
                //     "a {" +
                //         "color: rgba(255,131,196,1);" +
                //     "}" +
                //     ".primary {" +
                //         "background-color: rgba(255,131,196,1) !important;" +
                //     "}" +
                // "</style>",
                // htmlToBody:
                // "<style tyle=\"text/css\">" +
                //     ":root {" +
                //         "--currentTime: rgba(255,131,196,1);" +
                //         "--color1: rgba(255,131,196,1);" +
                //     "}" +
                //     "a {" +
                //         "color: rgba(255,131,196,1);" +
                //     "}" +
                //     ".primary {" +
                //         "background-color: rgba(255,131,196,1) !important;" +
                //     "}" +
                // "</style>",
                htmlSelectors: {
                    mainWindow: "#rplayer",           // recommended ID
                    dimmer:     ".FullscreenDimmer",
                    info: {
                        currentTime:      ".rplayerCurTime",
                        lengthTime:       ".rplayerLenTime",
                        appVersion:       ".rPlayerVersion",
                        appDate:          ".rPlayerVersionDate",
                        currentTrackName: ".rplayerCurTrackName",
                        albumDuration:    ".rPlayerAlbumDuration",
                        bufferLoading:    ".rplayerBufferShowLoading",
                        bufferCondition:  ".rplayerBufferCondition",
                        transport:        ".rplayerTransport",
                        playlistOneTrack: ".rplayerOneTrack",
                        playlistBox:      ".rplayerTrackList",
                        showInfoWindow:   ".rplayerShowInfo",
                        albumComposer:    ".rplayerAuthor",
                        albumName:        ".rplayerAlbumName",
                        albumYear:        ".rplayerAlbumYear"
                    },
                    controls: {
                        volumeFader:      ".rplayerVolFader",
                        seeker:           ".rplayerSeeker",
                        loopAll:          ".rplayerLoopAll",
                        stopAfterTrack:   ".rplayerStopAfterTrack",
                        fullScreen:       ".fullScreen",
                        wordsButton:      "#rplayerWords",
                        minimize:         ".rplayerMinimize",
                        trackInfoButton:  ".trackInfoButton",
                        helpButton:       ".helpButton"
                    }
                },
                windows: {
                    showInfo: {
                        htmlSelector: ".rplayerShowInfo",
                    }
                }
            },
            album: {
                mediaSrc: "media/sounds/YATSU-2021-Mirrors-202202110022.m4a",
                srcsForCheck: {
                    0: "media/images/dreamer_album.jpg",
                },
                // downloads: {
                //     0: {
                //         name: "Hrníčky s pletením.mkv",
                //         srcFile: "media/downloads/1.mkv",
                //         folder: "_various",
                //     },
                //     1: {
                //         name: "Kritické myšlení.mkv",
                //         srcFile: "media/downloads/2.mkv",
                //         folder: "_various",
                //     },
                // },
                info: {
                    image: "media/images/dreamer_album.jpg",
                    name: "Dreamer",
                    year: "2021",
                    genres: {
                        0: "Metal",
                        1: "Progressive rock",
                        2: "Djent",
                    },
                    label: "",
                    copyright: "",
                    lang: "en",
                    composer: "YATSU",
                    miniIcons: {
                        0: {
                            url: "https://facebook.com/yatsuband",
                            icon: "<i class=\"facebook icon\"></i>",
                            target: "_blank",
                            name: "Facebook",
                            onFront: true,
                        },
                        1: {
                            url: "https://www.instagram.com/yatsuband/",
                            icon: "<i class=\"instagram icon\"></i>",
                            target: "_blank",
                            name: "Instagram",
                            onFront: true,
                        },
                    },
                    anyHtml: 
                    "<p style='margin-top: 1em;'>" +
                        "Thank you for purchasing <a href=\"https://yatsuband.bandcamp.com/album/dreamer-producer-pack\" target=\"_blank\"><i class=\"bandcamp icon\" style=\"display: inline-block; padding: 0 !important\"></i>the \"Dreamer\" Producer Pack</a>, you are an awesome human being! " +
                        "Here's some useful information about the album and what gear was used to make it." +
                    "</p>" +
                    "<h3>Album vocalists</h3>" +
                    "<div style=\"text-align: center;\"><div style=\"display: inline-block; text-align: center; margin: .5em;\"><a href=\"https://instagram.com/justinarteu/\" target=\"_blank\">Jurta<i class=\"instagram icon\" style=\"display: inline-block; padding: 0 !important;\"></i><br>" +
                    "<img style=\"margin-top: .5em; border-radius: .5em; border: .2em solid transparent;\" src=\"data:image/png;base64,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\">" +
                    "</a></div>" +
                    "<div style=\"display: inline-block; text-align: center; margin: .5em;\"><a href=\"https://instagram.com/nolanmateer\" target=\"_blank\">Nolan Mateer<i class=\"instagram icon\" style=\"display: inline-block; padding: 0 !important;\"></i><br>" +
                    "<img style=\"margin-top: .5em; border-radius: .5em; border: .2em solid transparent;\" src=\"data:image/jpeg;base64,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\">" +
                    "</a></div>" +
                    "<div style=\"display: inline-block; text-align: center; margin: .5em;\"><a href=\"https://www.instagram.com/marcelbrianiarts/\" target=\"_blank\">Marcel Briani<i class=\"instagram icon\" style=\"display: inline-block; padding: 0 !important;\"></i><br>" +
                    "<img style=\"margin-top: .5em; border-radius: .5em; border: .2em solid transparent;\" src=\"data:image/png;base64,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\">" +
                    "</a></div></div>",
                },
                donations: {
                    html: "<h3>Donations for composer:</h3>",
                    wallets: {
                        0: {
                            ccurrency: "Bitcoin",
                            image: "data:image/png;base64,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",
                            adress: "bc1q9ldlmmduspldm8zke4qqhnl89vptjyydnk38zj",
                        },
                        1: {
                            ccurrency: "Ethereum",
                            image: "data:image/png;base64,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",
                            adress: "0xC97e66637F2b282A30D6455d99Ce54114A878C5D",
                        },
                        2: {
                            ccurrency: "Ripple",
                            image: "data:image/png;base64,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",
                            adress: "rDeffp2pubhbTseXZHDkEwLue29HeiVh3f",
                        },
                        3: {
                            ccurrency: "Litecoin",
                            image: "data:image/png;base64,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",
                            adress: "LaqLBNFKGq7ZNAqVTU5RNMJwHBMjnxf7Qk",
                        },
                        4: {
                            ccurrency: "Dogecoin",
                            image: "data:image/png;base64,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",
                            adress: "DSBHgSQLzNoWdP59uyHkmR712UfjUmiTw8",
                        },
                    },
                },
                tracks: {
                    0: {
                        timeStart: 0,
                        mediaName: "Mirrors",
                        downloads: {
                            mp3: "media/sounds/mp3/1.mp3",
                        },
                        info: {
                            image: "media/images/mirrors.jpg",
                            icon: "media/icons/mirrors.png",
                            composer: "Michal Diviš",
                            lang: "eng", // ISO 639-2
                            year: 2021,
                            genres: {
                                0: "Metal",
                                1: "Progressive rock",
                                2: "Djent",
                            },
                            label: "",
                            bpm: "110",
                            isrc: "",
                            copyright: "(c) 2021 Michal Diviš",
                            anyHtml: {
                                0: {
                                    id: "Song tempo",
                                    html: "110BPM",
                                },
                                1: {
                                    id: "<div class=\"drumsHeader\" style=\"width: min-content;\">Drums</div>",
                                    html: 
                                    "<p>" +
                                        "All drums are programmed and you can find the drum MIDI files in the /MIDI folder. " + 
                                        "Here's a list of all the sample libraries / samples used for different kit pieces:.<br>" + 
                                    "</p>" +
                                    "<div class=\"kickBlendedHeader\" style=\"font-weight: bold; width: min-content; white-space: nowrap;\">Kick (blended):</div>" +
                                    "<ul><li>GGD OKW Modern Fusion - the main kick</li><li>GGD Modern & Massive - 26x14 Yamaha kick</li><li>custom one shot kick sample</li></ul>" +
                                    "<div class=\"snareBlendedHeader\" style=\"width: min-content; white-space: nowrap; font-weight: bold;\">Snare (blended):</div>" +
                                    "<ul><li>Nolly's Secret Sauce snare (a freebie Nolly gave out in 2019)</li><li>GGD P4 - The VK snare</li><li>GGD OKW Metal - the main snare (only the room mics)</li></ul>" +
                                    "<strong>Toms:</strong><br>" +
                                    "<ul><li>GGD P4 toms</li></ul>" +
                                    "<strong>Cymbals:</strong><br>" +
                                    "<ul><li>GGD P4 toms</li></ul>" +
                                    "<strong>And here's the MIDI mapping:</strong><br>" +
                                    "<table style=\"font-family: courier; border-collapse: collapse; margin-top: .5em;\">" +
                                        "<tr><td class=\"midiKick\" style=\"padding: 0 1em 0 1.5em;\">C0</td><td>Kick</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">C#0</td><td>Snare Ghost Note</td></tr>" +
                                        "<tr><td class=\"midiSnare\" style=\"padding: 0 1em 0 1.5em;\">D0</td><td>Snare Main Hit</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">A0</td><td>Rack Tom 1</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">A#0</td><td>Rack Tom 2</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">B0</td><td>Floor Tom 1</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">C1</td><td>Floor Tom 2</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">F1</td><td>Hat Tip Tight</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">F#1</td><td>Hat Edge Tight</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">G1</td><td>Hat Tip Closed</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">G#1</td><td>Hat Edge Closed</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">A1</td><td>Hat Open 1</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">A#1</td><td>Hat Open 2</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">B1</td><td>Hat Open 3</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">C2</td><td>Hat Pedal</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">C#2</td><td>Hat Pedal Ching</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">E2</td><td>Crash L 1</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">F2</td><td>Crash L 1 Choke</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">F#2</td><td>Crash R</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">G2</td><td>Crash R: Choke</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">G#2</td><td>Crash L 2</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">A2</td><td>Crash L 2 Choke</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">C#3</td><td>Ride Bell</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">D3</td><td>Ride Bow</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">F3</td><td>China</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">F#3</td><td>China: Choke</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">C#3</td><td>Splash L</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">D4</td><td>Splash L Choke</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">D#4</td><td>Splash R</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">E4</td><td>Splash R Choke</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">F4</td><td>Mini Hat</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">F#4</td><td>Stack</td></tr>" +
                                    "</table>",
                                },
                                2: {
                                    id: "Bass",
                                    html:
                                    "<p>" +
                                    "All the bass is programmed and you can find the bass MIDI files in the /MIDI folder. " +
                                    "All of the bass tracks on the album were done with Sumbission Audio's DjinnBass sample library. " +
                                    "Most of the bass tones on the album we're processed using the NeuralDSP's Parallax plugin.<br>" +
                                    "</p>",
                                },
                                3: {
                                    id: "Guitars",
                                    html:
                                    "<p>All of the guitars track on the album (rhytms, leads, drones, cleans) were recorded in my home studio (fancy way of saying \"a table and an audio interface in my living room\").</p>" +
                                    "<strong>Gear used for guitar tracking:</strong><br>" +
                                    "<ul>" +
                                        "<li>Solar A1.6D 27 Baritone guitar (with the stock pickups)</li>" +
                                        "<li>Focusrite Scarlett Solo Gen 3 audio interface</li>" +
                                        "<li>Radial PRO48 active DI box</li>" +
                                        "<li>Daddario EXL157 strings</li>" +
                                        "<li>StringJoy custom strings, gauges: .074 .052 .044 .028w .022 .016 (used for the drop F tuning in \"Spectre\")</li>" +
                                        "<li>Janicek Picks Jazz B 0.88mm guitar picks</li>" +
                                    "</ul>" +
                                    "<strong>Tones:</strong><br><br>" +
                                    "<table style=\"border-collapse: collapse;\">" +
                                        "<tr>" +
                                            "<td>" +
                                                "<strong>Rhytms: </strong>" +
                                            "</td>" +
                                            "<td>" +
                                                "NeuralDSP Archetype Nolly (using an IR that comes with the plugin, no external IR)" +
                                            "</td>" +
                                        "</tr>" +
                                        "<tr>" +
                                            "<td>" +
                                                "<strong>Leads: </strong>" +
                                            "</td>" +
                                            "<td>" +
                                                "NeuralDSP Archetype Abasi (using an IR that comes with the plugin, no external IR)" +
                                            "</td>" +
                                        "</tr>" +
                                            "<td>" +
                                                "<strong>Cleans: </strong>" +
                                            "</td>" +
                                            "<td>" +
                                                "NeuralDSP Archetype Plini (cab sim turned off)" +
                                            "</td>" +
                                        "</tr>" +
                                    "</table>"
                                },
                                4: {
                                    id: "Synths",
                                    html: 
                                    "<p>" +
                                        "All the extra instruments and synths on the album are programmed. Here's a list of some of the kontakt libraries used:" +
                                    "</p>" +
                                    "<ul>" +
                                        "<li>" +
                                            "Fracture Sounds' Woodchester Piano (kontakt library)" +
                                        "</li>" +
                                        "<li>" +
                                            "u-he Diva (synth plugin)" +
                                        "</li>" +
                                        "<li>" +
                                            "Best Service's Emotional Cello (kontakt library)" +
                                        "</li>" +
                                        "<li>" +
                                            "Heavyocity's Gravity (kontakt library)" +
                                        "</li>" +
                                        "<li>" +
                                            "Heavyocity's Mosaic Tape (kontakt library)" +
                                        "</li>" +
                                        "<li>" +
                                            "Finishing Move's Posthuman (kontakt library)" +
                                        "</li>" +
                                    "</ul>"
                                }
                            },
                        },
                    },
                    1: {
                        timeStart: 270,
                        mediaName: "Dreamer",
                        downloads: {
                            mp3: "media/sounds/mp3/2.mp3",
                        },
                        info: {
                            image: "media/images/dreamer_album.jpg",
                            icon: "media/icons/dreamer_album.png",
                            composer: "Michal Diviš",
                            lang: "eng", // ISO 639-2
                            year: 2021,
                            genres: {
                                0: "Metal",
                                1: "Progressive rock",
                                2: "Djent",
                            },
                            label: "",
                            bpm: "120",
                            isrc: "",
                            copyright: "(c) 2021 Michal Diviš",
                            anyHtml: {
                                0: {
                                    id: "Song tempo",
                                    html: "120BPM",
                                },
                                1: {
                                    id: "<div class=\"drumsHeader\" style=\"width: min-content;\">Drums</div>",
                                    html: 
                                    "<p>" +
                                        "All drums are programmed and you can find the drum MIDI files in the /MIDI folder. " + 
                                        "Here's a list of all the sample libraries / samples used for different kit pieces:.<br>" + 
                                    "</p>" +
                                    "<div class=\"kickBlendedHeader\" style=\"font-weight: bold; width: min-content; white-space: nowrap;\">Kick (blended):</div>" +
                                    "<ul><li>GGD OKW Modern Fusion - the main kick</li><li>GGD Modern & Massive - 26x14 Yamaha kick</li><li>custom one shot kick sample</li></ul>" +
                                    "<div class=\"snareBlendedHeader\" style=\"width: min-content; white-space: nowrap; font-weight: bold;\">Snare (blended):</div>" +
                                    "<ul><li>Nolly's Secret Sauce snare (a freebie Nolly gave out in 2019)</li><li>GGD P4 - The VK snare</li><li>GGD OKW Metal - the main snare (only the room mics)</li></ul>" +
                                    "<strong>Toms:</strong><br>" +
                                    "<ul><li>GGD P4 toms</li></ul>" +
                                    "<strong>Cymbals:</strong><br>" +
                                    "<ul><li>GGD P4 toms</li></ul>" +
                                    "<strong>And here's the MIDI mapping:</strong><br>" +
                                    "<table style=\"font-family: courier; border-collapse: collapse; margin-top: .5em;\">" +
                                        "<tr><td class=\"midiKick\" style=\"padding: 0 1em 0 1.5em;\">C0</td><td>Kick</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">C#0</td><td>Snare Ghost Note</td></tr>" +
                                        "<tr><td class=\"midiSnare\" style=\"padding: 0 1em 0 1.5em;\">D0</td><td>Snare Main Hit</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">A0</td><td>Rack Tom 1</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">A#0</td><td>Rack Tom 2</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">B0</td><td>Floor Tom 1</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">C1</td><td>Floor Tom 2</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">F1</td><td>Hat Tip Tight</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">F#1</td><td>Hat Edge Tight</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">G1</td><td>Hat Tip Closed</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">G#1</td><td>Hat Edge Closed</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">A1</td><td>Hat Open 1</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">A#1</td><td>Hat Open 2</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">B1</td><td>Hat Open 3</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">C2</td><td>Hat Pedal</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">C#2</td><td>Hat Pedal Ching</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">E2</td><td>Crash L 1</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">F2</td><td>Crash L 1 Choke</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">F#2</td><td>Crash R</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">G2</td><td>Crash R: Choke</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">G#2</td><td>Crash L 2</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">A2</td><td>Crash L 2 Choke</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">C#3</td><td>Ride Bell</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">D3</td><td>Ride Bow</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">F3</td><td>China</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">F#3</td><td>China: Choke</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">C#3</td><td>Splash L</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">D4</td><td>Splash L Choke</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">D#4</td><td>Splash R</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">E4</td><td>Splash R Choke</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">F4</td><td>Mini Hat</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">F#4</td><td>Stack</td></tr>" +
                                    "</table>",
                                },
                                2: {
                                    id: "Bass",
                                    html:
                                    "<p>" +
                                    "All the bass is programmed and you can find the bass MIDI files in the /MIDI folder. " +
                                    "All of the bass tracks on the album were done with Sumbission Audio's DjinnBass sample library. " +
                                    "Most of the bass tones on the album we're processed using the NeuralDSP's Parallax plugin.<br>" +
                                    "</p>",
                                },
                                3: {
                                    id: "Guitars",
                                    html:
                                    "<p>All of the guitars track on the album (rhytms, leads, drones, cleans) were recorded in my home studio (fancy way of saying \"a table and an audio interface in my living room\").</p>" +
                                    "<strong>Gear used for guitar tracking:</strong><br>" +
                                    "<ul>" +
                                        "<li>Solar A1.6D 27 Baritone guitar (with the stock pickups)</li>" +
                                        "<li>Focusrite Scarlett Solo Gen 3 audio interface</li>" +
                                        "<li>Radial PRO48 active DI box</li>" +
                                        "<li>Daddario EXL157 strings</li>" +
                                        "<li>StringJoy custom strings, gauges: .074 .052 .044 .028w .022 .016 (used for the drop F tuning in \"Spectre\")</li>" +
                                        "<li>Janicek Picks Jazz B 0.88mm guitar picks</li>" +
                                    "</ul>" +
                                    "<strong>Tones:</strong><br><br>" +
                                    "<table style=\"border-collapse: collapse;\">" +
                                        "<tr>" +
                                            "<td>" +
                                                "<strong>Rhytms: </strong>" +
                                            "</td>" +
                                            "<td>" +
                                                "NeuralDSP Archetype Nolly (using an IR that comes with the plugin, no external IR)" +
                                            "</td>" +
                                        "</tr>" +
                                        "<tr>" +
                                            "<td>" +
                                                "<strong>Leads: </strong>" +
                                            "</td>" +
                                            "<td>" +
                                                "NeuralDSP Archetype Abasi (using an IR that comes with the plugin, no external IR)" +
                                            "</td>" +
                                        "</tr>" +
                                            "<td>" +
                                                "<strong>Cleans: </strong>" +
                                            "</td>" +
                                            "<td>" +
                                                "NeuralDSP Archetype Plini (cab sim turned off)" +
                                            "</td>" +
                                        "</tr>" +
                                    "</table>"
                                },
                                4: {
                                    id: "Synths",
                                    html: 
                                    "<p>" +
                                        "All the extra instruments and synths on the album are programmed. Here's a list of some of the kontakt libraries used:" +
                                    "</p>" +
                                    "<ul>" +
                                        "<li>" +
                                            "Fracture Sounds' Woodchester Piano (kontakt library)" +
                                        "</li>" +
                                        "<li>" +
                                            "u-he Diva (synth plugin)" +
                                        "</li>" +
                                        "<li>" +
                                            "Best Service's Emotional Cello (kontakt library)" +
                                        "</li>" +
                                        "<li>" +
                                            "Heavyocity's Gravity (kontakt library)" +
                                        "</li>" +
                                        "<li>" +
                                            "Heavyocity's Mosaic Tape (kontakt library)" +
                                        "</li>" +
                                        "<li>" +
                                            "Finishing Move's Posthuman (kontakt library)" +
                                        "</li>" +
                                    "</ul>"
                                }
                            },
                        }
                    },
                    2: {
                        timeStart: 538.5,
                        mediaName: "Ornaments",
                        downloads: {
                            mp3: "media/sounds/mp3/3.mp3",
                        },
                        info: {
                            image: "media/images/ornaments_w_vocals.jpg",
                            icon: "media/icons/ornaments_w_vocals.png",
                            composer: "Michal Diviš",
                            lang: "eng", // ISO 639-2
                            year: 2021,
                            genres: {
                                0: "Metal",
                                1: "Progressive rock",
                                2: "Djent",
                            },
                            label: "",
                            bpm: "120",
                            isrc: "",
                            copyright: "(c) 2021 Michal Diviš",
                            anyHtml: {
                                0: {
                                    id: "Vocals",
                                    html: 
                                    "<div style=\"display: inline-block; text-align: center; margin-right: 1em;\"><a href=\"https://instagram.com/justinarteu/\" target=\"_blank\">Jurta<i class=\"instagram icon\" style=\"display: inline-block; padding: 0 !important;\"></i><br>" +
                                    "<img style=\"margin-top: .5em; border-radius: .5em; border: .2em solid transparent;\" src=\"data:image/png;base64,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\">" +
                                    "</a></div>" +
                                    "<div style=\"display: inline-block; text-align: center; margin-right: 1em;\"><a href=\"https://instagram.com/nolanmateer\" target=\"_blank\">Nolan Mateer<i class=\"instagram icon\" style=\"display: inline-block; padding: 0 !important;\"></i><br>" +
                                    "<img style=\"margin-top: .5em; border-radius: .5em; border: .2em solid transparent;\" src=\"data:image/jpeg;base64,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\">" +
                                    "</a></div>"
                                },
                                1: {
                                    id: "Song tempo",
                                    html: "120BPM",
                                },
                                2: {
                                    id: "<div class=\"drumsHeader\" style=\"width: min-content;\">Drums</div>",
                                    html: 
                                    "<p>" +
                                        "All drums are programmed and you can find the drum MIDI files in the /MIDI folder. " + 
                                        "Here's a list of all the sample libraries / samples used for different kit pieces:.<br>" + 
                                    "</p>" +
                                    "<div class=\"kickBlendedHeader\" style=\"font-weight: bold; width: min-content; white-space: nowrap;\">Kick (blended):</div>" +
                                    "<ul><li>GGD OKW Modern Fusion - the main kick</li><li>GGD Modern & Massive - 26x14 Yamaha kick</li><li>custom one shot kick sample</li></ul>" +
                                    "<div class=\"snareBlendedHeader\" style=\"width: min-content; white-space: nowrap; font-weight: bold;\">Snare (blended):</div>" +
                                    "<ul><li>Nolly's Secret Sauce snare (a freebie Nolly gave out in 2019)</li><li>GGD P4 - The VK snare</li><li>GGD OKW Metal - the main snare (only the room mics)</li></ul>" +
                                    "<strong>Toms:</strong><br>" +
                                    "<ul><li>GGD P4 toms</li></ul>" +
                                    "<strong>Cymbals:</strong><br>" +
                                    "<ul><li>GGD P4 toms</li></ul>" +
                                    "<strong>And here's the MIDI mapping:</strong><br>" +
                                    "<table style=\"font-family: courier; border-collapse: collapse; margin-top: .5em;\">" +
                                        "<tr><td class=\"midiKick\" style=\"padding: 0 1em 0 1.5em;\">C0</td><td>Kick</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">C#0</td><td>Snare Ghost Note</td></tr>" +
                                        "<tr><td class=\"midiSnare\" style=\"padding: 0 1em 0 1.5em;\">D0</td><td>Snare Main Hit</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">A0</td><td>Rack Tom 1</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">A#0</td><td>Rack Tom 2</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">B0</td><td>Floor Tom 1</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">C1</td><td>Floor Tom 2</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">F1</td><td>Hat Tip Tight</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">F#1</td><td>Hat Edge Tight</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">G1</td><td>Hat Tip Closed</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">G#1</td><td>Hat Edge Closed</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">A1</td><td>Hat Open 1</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">A#1</td><td>Hat Open 2</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">B1</td><td>Hat Open 3</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">C2</td><td>Hat Pedal</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">C#2</td><td>Hat Pedal Ching</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">E2</td><td>Crash L 1</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">F2</td><td>Crash L 1 Choke</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">F#2</td><td>Crash R</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">G2</td><td>Crash R: Choke</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">G#2</td><td>Crash L 2</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">A2</td><td>Crash L 2 Choke</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">C#3</td><td>Ride Bell</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">D3</td><td>Ride Bow</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">F3</td><td>China</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">F#3</td><td>China: Choke</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">C#3</td><td>Splash L</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">D4</td><td>Splash L Choke</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">D#4</td><td>Splash R</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">E4</td><td>Splash R Choke</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">F4</td><td>Mini Hat</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">F#4</td><td>Stack</td></tr>" +
                                    "</table>",
                                },
                                3: {
                                    id: "Bass",
                                    html:
                                    "<p>" +
                                    "All the bass is programmed and you can find the bass MIDI files in the /MIDI folder. " +
                                    "All of the bass tracks on the album were done with Sumbission Audio's DjinnBass sample library. " +
                                    "Most of the bass tones on the album we're processed using the NeuralDSP's Parallax plugin.<br>" +
                                    "</p>",
                                },
                                4: {
                                    id: "Guitars",
                                    html:
                                    "<p>All of the guitars track on the album (rhytms, leads, drones, cleans) were recorded in my home studio (fancy way of saying \"a table and an audio interface in my living room\").</p>" +
                                    "<strong>Gear used for guitar tracking:</strong><br>" +
                                    "<ul>" +
                                        "<li>Solar A1.6D 27 Baritone guitar (with the stock pickups)</li>" +
                                        "<li>Focusrite Scarlett Solo Gen 3 audio interface</li>" +
                                        "<li>Radial PRO48 active DI box</li>" +
                                        "<li>Daddario EXL157 strings</li>" +
                                        "<li>StringJoy custom strings, gauges: .074 .052 .044 .028w .022 .016 (used for the drop F tuning in \"Spectre\")</li>" +
                                        "<li>Janicek Picks Jazz B 0.88mm guitar picks</li>" +
                                    "</ul>" +
                                    "<strong>Tones:</strong><br><br>" +
                                    "<table style=\"border-collapse: collapse;\">" +
                                        "<tr>" +
                                            "<td>" +
                                                "<strong>Rhytms: </strong>" +
                                            "</td>" +
                                            "<td>" +
                                                "NeuralDSP Archetype Nolly (using an IR that comes with the plugin, no external IR)" +
                                            "</td>" +
                                        "</tr>" +
                                        "<tr>" +
                                            "<td>" +
                                                "<strong>Leads: </strong>" +
                                            "</td>" +
                                            "<td>" +
                                                "NeuralDSP Archetype Abasi (using an IR that comes with the plugin, no external IR)" +
                                            "</td>" +
                                        "</tr>" +
                                            "<td>" +
                                                "<strong>Cleans: </strong>" +
                                            "</td>" +
                                            "<td>" +
                                                "NeuralDSP Archetype Plini (cab sim turned off)" +
                                            "</td>" +
                                        "</tr>" +
                                    "</table>"
                                },
                                5: {
                                    id: "Synths",
                                    html: 
                                    "<p>" +
                                        "All the extra instruments and synths on the album are programmed. Here's a list of some of the kontakt libraries used:" +
                                    "</p>" +
                                    "<ul>" +
                                        "<li>" +
                                            "Fracture Sounds' Woodchester Piano (kontakt library)" +
                                        "</li>" +
                                        "<li>" +
                                            "u-he Diva (synth plugin)" +
                                        "</li>" +
                                        "<li>" +
                                            "Best Service's Emotional Cello (kontakt library)" +
                                        "</li>" +
                                        "<li>" +
                                            "Heavyocity's Gravity (kontakt library)" +
                                        "</li>" +
                                        "<li>" +
                                            "Heavyocity's Mosaic Tape (kontakt library)" +
                                        "</li>" +
                                        "<li>" +
                                            "Finishing Move's Posthuman (kontakt library)" +
                                        "</li>" +
                                    "</ul>"
                                }
                            },
                        },
                        words: {
                            18545: "Dark shadows of the past", // ID is time [ms]
                            21160: "Haunting my mind, haunting my mind",
                            26600: "Stealing peace throughout the day",
                            29909: "At night the tormenting kind<br>",
                            35520: "Playing scenes of guilt and shame",
                            39952: "Over and over again",
                            44741: "I cannot escape,",
                            48243: "Nightmares will never end<br>",
                            53708: "Alone I found the way",
                            57798: "My soul could be released",
                            62097: "From my darkest days<br>",
                            69908: "Alone I found the way",
                            73878: "My soul could be released",
                            78051: "From my darkest days<br>",
                            88531: "My redeemer has rescued me",
                            96200: "I am a slave to no one<br>",
                            117592: "Dark shadows of the past",
                            122003: "Haunting my mind",
                            125483: "Dark shadows of the past",
                            129491: "Stealing peace throughout the day",
                            133491: "Dark shadows of the past",
                            137901: "Haunting my mind",
                            141469: "It distracts in the day",
                            145520: "At night it torments<br>",
                            149531: "Playing scenes of guilt and shame",
                            153989: "Over and over again",
                            158800: "I can't run away,",
                            162248: "There is a darkness in day<br>",
                            165501: "Playing scenes of guilt and shame",
                            169971: "Over and over again",
                            174771: "I cannot escape,",
                            178291: "Nightmares will never end<br>",
                            183752: "Alone I found the way",
                            187803: "My soul could be released",
                            191973: "From my darkest days<br>",
                            199715: "Alone I found the way",
                            203805: "My soul could be released",
                            208013: "From my darkest days<br>",
                            216560: "No more shadows of the past",
                            220608: "No more haunting my mind",
                            226520: "No more enemy of peace",
                            232632: "I am finally free",
                        }
                    },
                    3: {
                        timeStart: 786.6,
                        mediaName: "Labyrinth",
                        downloads: {
                            mp3: "media/sounds/mp3/4.mp3",
                        },
                        info: {
                            image: "media/images/labyrinth.jpg",
                            icon: "media/icons/labyrinth.png",
                            composer: "Michal Diviš",
                            lang: "eng", // ISO 639-2
                            year: 2021,
                            genres: {
                                0: "Metal",
                                1: "Progressive rock",
                                2: "Djent",
                            },
                            label: "",
                            bpm: "175",
                            isrc: "",
                            copyright: "(c) 2021 Michal Diviš",
                            anyHtml: {
                                0: {
                                    id: "Song tempo",
                                    html: "175BPM",
                                },
                                1: {
                                    id: "<div class=\"drumsHeader\" style=\"width: min-content;\">Drums</div>",
                                    html: 
                                    "<p>" +
                                        "All drums are programmed and you can find the drum MIDI files in the /MIDI folder. " + 
                                        "Here's a list of all the sample libraries / samples used for different kit pieces:.<br>" + 
                                    "</p>" +
                                    "<div class=\"kickBlendedHeader\" style=\"font-weight: bold; width: min-content; white-space: nowrap;\">Kick (blended):</div>" +
                                    "<ul><li>GGD OKW Modern Fusion - the main kick</li><li>GGD Modern & Massive - 26x14 Yamaha kick</li><li>custom one shot kick sample</li></ul>" +
                                    "<div class=\"snareBlendedHeader\" style=\"width: min-content; white-space: nowrap; font-weight: bold;\">Snare (blended):</div>" +
                                    "<ul><li>Nolly's Secret Sauce snare (a freebie Nolly gave out in 2019)</li><li>GGD P4 - The VK snare</li><li>GGD OKW Metal - the main snare (only the room mics)</li></ul>" +
                                    "<strong>Toms:</strong><br>" +
                                    "<ul><li>GGD P4 toms</li></ul>" +
                                    "<strong>Cymbals:</strong><br>" +
                                    "<ul><li>GGD P4 toms</li></ul>" +
                                    "<strong>And here's the MIDI mapping:</strong><br>" +
                                    "<table style=\"font-family: courier; border-collapse: collapse; margin-top: .5em;\">" +
                                        "<tr><td class=\"midiKick\" style=\"padding: 0 1em 0 1.5em;\">C0</td><td>Kick</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">C#0</td><td>Snare Ghost Note</td></tr>" +
                                        "<tr><td class=\"midiSnare\" style=\"padding: 0 1em 0 1.5em;\">D0</td><td>Snare Main Hit</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">A0</td><td>Rack Tom 1</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">A#0</td><td>Rack Tom 2</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">B0</td><td>Floor Tom 1</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">C1</td><td>Floor Tom 2</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">F1</td><td>Hat Tip Tight</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">F#1</td><td>Hat Edge Tight</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">G1</td><td>Hat Tip Closed</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">G#1</td><td>Hat Edge Closed</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">A1</td><td>Hat Open 1</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">A#1</td><td>Hat Open 2</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">B1</td><td>Hat Open 3</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">C2</td><td>Hat Pedal</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">C#2</td><td>Hat Pedal Ching</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">E2</td><td>Crash L 1</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">F2</td><td>Crash L 1 Choke</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">F#2</td><td>Crash R</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">G2</td><td>Crash R: Choke</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">G#2</td><td>Crash L 2</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">A2</td><td>Crash L 2 Choke</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">C#3</td><td>Ride Bell</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">D3</td><td>Ride Bow</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">F3</td><td>China</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">F#3</td><td>China: Choke</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">C#3</td><td>Splash L</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">D4</td><td>Splash L Choke</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">D#4</td><td>Splash R</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">E4</td><td>Splash R Choke</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">F4</td><td>Mini Hat</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">F#4</td><td>Stack</td></tr>" +
                                    "</table>",
                                },
                                2: {
                                    id: "Bass",
                                    html:
                                    "<p>" +
                                    "All the bass is programmed and you can find the bass MIDI files in the /MIDI folder. " +
                                    "All of the bass tracks on the album were done with Sumbission Audio's DjinnBass sample library. " +
                                    "Most of the bass tones on the album we're processed using the NeuralDSP's Parallax plugin.<br>" +
                                    "</p>",
                                },
                                3: {
                                    id: "Guitars",
                                    html:
                                    "<p>All of the guitars track on the album (rhytms, leads, drones, cleans) were recorded in my home studio (fancy way of saying \"a table and an audio interface in my living room\").</p>" +
                                    "<strong>Gear used for guitar tracking:</strong><br>" +
                                    "<ul>" +
                                        "<li>Solar A1.6D 27 Baritone guitar (with the stock pickups)</li>" +
                                        "<li>Focusrite Scarlett Solo Gen 3 audio interface</li>" +
                                        "<li>Radial PRO48 active DI box</li>" +
                                        "<li>Daddario EXL157 strings</li>" +
                                        "<li>StringJoy custom strings, gauges: .074 .052 .044 .028w .022 .016 (used for the drop F tuning in \"Spectre\")</li>" +
                                        "<li>Janicek Picks Jazz B 0.88mm guitar picks</li>" +
                                    "</ul>" +
                                    "<strong>Tones:</strong><br><br>" +
                                    "<table style=\"border-collapse: collapse;\">" +
                                        "<tr>" +
                                            "<td>" +
                                                "<strong>Rhytms: </strong>" +
                                            "</td>" +
                                            "<td>" +
                                                "NeuralDSP Archetype Nolly (using an IR that comes with the plugin, no external IR)" +
                                            "</td>" +
                                        "</tr>" +
                                        "<tr>" +
                                            "<td>" +
                                                "<strong>Leads: </strong>" +
                                            "</td>" +
                                            "<td>" +
                                                "NeuralDSP Archetype Abasi (using an IR that comes with the plugin, no external IR)" +
                                            "</td>" +
                                        "</tr>" +
                                            "<td>" +
                                                "<strong>Cleans: </strong>" +
                                            "</td>" +
                                            "<td>" +
                                                "NeuralDSP Archetype Plini (cab sim turned off)" +
                                            "</td>" +
                                        "</tr>" +
                                    "</table>"
                                },
                                4: {
                                    id: "Synths",
                                    html: 
                                    "<p>" +
                                        "All the extra instruments and synths on the album are programmed. Here's a list of some of the kontakt libraries used:" +
                                    "</p>" +
                                    "<ul>" +
                                        "<li>" +
                                            "Fracture Sounds' Woodchester Piano (kontakt library)" +
                                        "</li>" +
                                        "<li>" +
                                            "u-he Diva (synth plugin)" +
                                        "</li>" +
                                        "<li>" +
                                            "Best Service's Emotional Cello (kontakt library)" +
                                        "</li>" +
                                        "<li>" +
                                            "Heavyocity's Gravity (kontakt library)" +
                                        "</li>" +
                                        "<li>" +
                                            "Heavyocity's Mosaic Tape (kontakt library)" +
                                        "</li>" +
                                        "<li>" +
                                            "Finishing Move's Posthuman (kontakt library)" +
                                        "</li>" +
                                    "</ul>"
                                }
                            },
                        }
                    },
                    4: {
                        timeStart: 959.5,
                        mediaName: "Spectre",
                        downloads: {
                            mp3: "media/sounds/mp3/5.mp3",
                            others: {
                                0: {
                                    name: "Spectre - Lyrics video.mp4",
                                    srcFile: "media/videos/Spectre-1080p_60fps_H264-128kbit_AAC.mp4",
                                    folder: "",
                                }
                            },
                        },
                        info: {
                            image: "media/images/spectre.jpg",
                            icon: "media/icons/spectre.png",
                            composer: "Michal Diviš",
                            lang: "eng", // ISO 639-2
                            year: 2021,
                            genres: {
                                0: "Metal",
                                1: "Progressive rock",
                                2: "Djent",
                            },
                            label: "",
                            bpm: "175",
                            isrc: "",
                            copyright: "(c) 2021 Michal Diviš",
                            anyHtml: {
                                0: {
                                    id: "Vocal",
                                    html: 
                                    "<div style=\"display: inline-block; text-align: center; margin-right: 1em;\"><a href=\"https://www.instagram.com/marcelbrianiarts/\" target=\"_blank\">Marcel Briani<i class=\"instagram icon\" style=\"display: inline-block; padding: 0 !important;\"></i><br>" +
                                    "<img style=\"margin-top: .5em; border-radius: .5em; border: .2em solid transparent;\" src=\"data:image/png;base64,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\">" +
                                    "</a></div>"
                                },
                                1: {
                                    id: "Lyrics video <span style=\"font-weight: normal;\">[will stop playback in RPlayer]</span>",
                                    html:
                                    "<video style=\"width: 100%; z-index: 10000; position: relative;\" controls onplay=\"$(\'.rplayerTransport[data-command=rplayerStop]\').click();\">" +
                                        "<source src=\"./media/videos/Spectre-1080p_60fps_H264-128kbit_AAC.mp4\">" +
                                    "</video>",
                                    noDownloadRender: true, // This will not be render into info file.
                                },
                                2: {
                                    id: "Song tempo",
                                    html: "175BPM",
                                },
                                3: {
                                    id: "<div class=\"drumsHeader\" style=\"width: min-content;\">Drums</div>",
                                    html: 
                                    "<p>" +
                                        "All drums are programmed and you can find the drum MIDI files in the /MIDI folder. " + 
                                        "Here's a list of all the sample libraries / samples used for different kit pieces:.<br>" + 
                                    "</p>" +
                                    "<div class=\"kickBlendedHeader\" style=\"font-weight: bold; width: min-content; white-space: nowrap;\">Kick (blended):</div>" +
                                    "<ul><li>GGD OKW Modern Fusion - the main kick</li><li>GGD Modern & Massive - 26x14 Yamaha kick</li><li>custom one shot kick sample</li></ul>" +
                                    "<div class=\"snareBlendedHeader\" style=\"width: min-content; white-space: nowrap; font-weight: bold;\">Snare (blended):</div>" +
                                    "<ul><li>Nolly's Secret Sauce snare (a freebie Nolly gave out in 2019)</li><li>GGD P4 - The VK snare</li><li>GGD OKW Metal - the main snare (only the room mics)</li></ul>" +
                                    "<strong>Toms:</strong><br>" +
                                    "<ul><li>GGD P4 toms</li></ul>" +
                                    "<strong>Cymbals:</strong><br>" +
                                    "<ul><li>GGD P4 toms</li></ul>" +
                                    "<strong>And here's the MIDI mapping:</strong><br>" +
                                    "<table style=\"font-family: courier; border-collapse: collapse; margin-top: .5em;\">" +
                                        "<tr><td class=\"midiKick\" style=\"padding: 0 1em 0 1.5em;\">C0</td><td>Kick</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">C#0</td><td>Snare Ghost Note</td></tr>" +
                                        "<tr><td class=\"midiSnare\" style=\"padding: 0 1em 0 1.5em;\">D0</td><td>Snare Main Hit</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">A0</td><td>Rack Tom 1</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">A#0</td><td>Rack Tom 2</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">B0</td><td>Floor Tom 1</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">C1</td><td>Floor Tom 2</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">F1</td><td>Hat Tip Tight</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">F#1</td><td>Hat Edge Tight</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">G1</td><td>Hat Tip Closed</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">G#1</td><td>Hat Edge Closed</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">A1</td><td>Hat Open 1</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">A#1</td><td>Hat Open 2</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">B1</td><td>Hat Open 3</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">C2</td><td>Hat Pedal</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">C#2</td><td>Hat Pedal Ching</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">E2</td><td>Crash L 1</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">F2</td><td>Crash L 1 Choke</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">F#2</td><td>Crash R</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">G2</td><td>Crash R: Choke</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">G#2</td><td>Crash L 2</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">A2</td><td>Crash L 2 Choke</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">C#3</td><td>Ride Bell</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">D3</td><td>Ride Bow</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">F3</td><td>China</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">F#3</td><td>China: Choke</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">C#3</td><td>Splash L</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">D4</td><td>Splash L Choke</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">D#4</td><td>Splash R</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">E4</td><td>Splash R Choke</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">F4</td><td>Mini Hat</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">F#4</td><td>Stack</td></tr>" +
                                    "</table>",
                                },
                                4: {
                                    id: "Bass",
                                    html:
                                    "<p>" +
                                    "All the bass is programmed and you can find the bass MIDI files in the /MIDI folder. " +
                                    "All of the bass tracks on the album were done with Sumbission Audio's DjinnBass sample library. " +
                                    "Most of the bass tones on the album we're processed using the NeuralDSP's Parallax plugin.<br>" +
                                    "</p>",
                                },
                                5: {
                                    id: "Guitars",
                                    html:
                                    "<p>All of the guitars track on the album (rhytms, leads, drones, cleans) were recorded in my home studio (fancy way of saying \"a table and an audio interface in my living room\").</p>" +
                                    "<strong>Gear used for guitar tracking:</strong><br>" +
                                    "<ul>" +
                                        "<li>Solar A1.6D 27 Baritone guitar (with the stock pickups)</li>" +
                                        "<li>Focusrite Scarlett Solo Gen 3 audio interface</li>" +
                                        "<li>Radial PRO48 active DI box</li>" +
                                        "<li>Daddario EXL157 strings</li>" +
                                        "<li>StringJoy custom strings, gauges: .074 .052 .044 .028w .022 .016 (used for the drop F tuning in \"Spectre\")</li>" +
                                        "<li>Janicek Picks Jazz B 0.88mm guitar picks</li>" +
                                    "</ul>" +
                                    "<strong>Tones:</strong><br><br>" +
                                    "<table style=\"border-collapse: collapse;\">" +
                                        "<tr>" +
                                            "<td>" +
                                                "<strong>Rhytms: </strong>" +
                                            "</td>" +
                                            "<td>" +
                                                "NeuralDSP Archetype Nolly (using an IR that comes with the plugin, no external IR)" +
                                            "</td>" +
                                        "</tr>" +
                                        "<tr>" +
                                            "<td>" +
                                                "<strong>Leads: </strong>" +
                                            "</td>" +
                                            "<td>" +
                                                "NeuralDSP Archetype Abasi (using an IR that comes with the plugin, no external IR)" +
                                            "</td>" +
                                        "</tr>" +
                                            "<td>" +
                                                "<strong>Cleans: </strong>" +
                                            "</td>" +
                                            "<td>" +
                                                "NeuralDSP Archetype Plini (cab sim turned off)" +
                                            "</td>" +
                                        "</tr>" +
                                    "</table>"
                                },
                                6: {
                                    id: "Synths",
                                    html: 
                                    "<p>" +
                                        "All the extra instruments and synths on the album are programmed. Here's a list of some of the kontakt libraries used:" +
                                    "</p>" +
                                    "<ul>" +
                                        "<li>" +
                                            "Fracture Sounds' Woodchester Piano (kontakt library)" +
                                        "</li>" +
                                        "<li>" +
                                            "u-he Diva (synth plugin)" +
                                        "</li>" +
                                        "<li>" +
                                            "Best Service's Emotional Cello (kontakt library)" +
                                        "</li>" +
                                        "<li>" +
                                            "Heavyocity's Gravity (kontakt library)" +
                                        "</li>" +
                                        "<li>" +
                                            "Heavyocity's Mosaic Tape (kontakt library)" +
                                        "</li>" +
                                        "<li>" +
                                            "Finishing Move's Posthuman (kontakt library)" +
                                        "</li>" +
                                    "</ul>"
                                }
                            },
                        },
                        words: {
                            33599: "If I could turn back time",
                            36666: "Would I?",
                            39000: "If I have done it differently",
                            42100: "Should I?<br>",
                            44500: "How many steps does it take to reach the abyss",
                            49900: "Even when the downfall is so crystal clear",
                            55500: "We could have chosen a different path",
                            60800: "So why the hell haven´t we?<br>",
                            77777: "All those pictures on the wall",
                            80390: "Maybe I could go back there",
                            83160: "And to the other ones that we never used",
                            88800: "Would it all be different now?",
                            91500: "Would you pretend to care?",
                            94100: "If I was but a specter of my own self?",
                            99000: "(specter of my own self)<br>",
                            102000: "If I could turn back time",
                            105000: "Would you choose something different?",
                            110250: "If I could turn back time",
                            113150: "How could I talk you out of your own mind?",
                            118500: "I tried to reach you so many times<br>",
                            124000: "But you were always so far away, by my side",
                            129590: "Some random day, I decide",
                            135300: "that no more I would try",
                            140774: "And you´ve coped with the void",
                            146500: "...as if it was mine<br>",
                            149100: "All those memories so gray",
                            154448: "Are now painted in the color of pain",
                            160030: "Have I deceived you, have you deceived me?<br>",
                            173795: "Have I deceived you?",
                            181990: "Have you deceived me?",
                            190158: "Have I deceived you?",
                            198347: "Life seems so strange",
                            209600: "Life is so strange<br>",
                            220300: "All those pictures on the wall",
                            222900: "Maybe I could go back there",
                            225990: "And to the other ones that we never used",
                            231360: "Would it all be different now?",
                            233973: "Would you pretend to care?",
                            236900: "If I was but a specter of my own self?<br>",
                            242400: "Would it all be different now?",
                            247800: "Would you pretend to care?"
                        }
                    },
                    5: {
                        timeStart: 1215.5,
                        mediaName: "Bloom",
                        downloads: {
                            mp3: "media/sounds/mp3/6.mp3",
                        },
                        info: {
                            image: "media/images/dreamer_album.jpg",
                            icon: "media/icons/dreamer_album.png",
                            composer: "Michal Diviš",
                            lang: "eng", // ISO 639-2
                            year: 2021,
                            genres: {
                                0: "Metal",
                                1: "Progressive rock",
                                2: "Djent",
                            },
                            label: "",
                            bpm: "135",
                            isrc: "",
                            copyright: "(c) 2021 Michal Diviš",
                            anyHtml: {
                                0: {
                                    id: "Song tempo",
                                    html: "135BPM",
                                },
                                1: {
                                    id: "<div class=\"drumsHeader\" style=\"width: min-content;\">Drums</div>",
                                    html: 
                                    "<p>" +
                                        "All drums are programmed and you can find the drum MIDI files in the /MIDI folder. " + 
                                        "Here's a list of all the sample libraries / samples used for different kit pieces:.<br>" + 
                                    "</p>" +
                                    "<div class=\"kickBlendedHeader\" style=\"font-weight: bold; width: min-content; white-space: nowrap;\">Kick (blended):</div>" +
                                    "<ul><li>GGD OKW Modern Fusion - the main kick</li><li>GGD Modern & Massive - 26x14 Yamaha kick</li><li>custom one shot kick sample</li></ul>" +
                                    "<div class=\"snareBlendedHeader\" style=\"width: min-content; white-space: nowrap; font-weight: bold;\">Snare (blended):</div>" +
                                    "<ul><li>Nolly's Secret Sauce snare (a freebie Nolly gave out in 2019)</li><li>GGD P4 - The VK snare</li><li>GGD OKW Metal - the main snare (only the room mics)</li></ul>" +
                                    "<strong>Toms:</strong><br>" +
                                    "<ul><li>GGD P4 toms</li></ul>" +
                                    "<strong>Cymbals:</strong><br>" +
                                    "<ul><li>GGD P4 toms</li></ul>" +
                                    "<strong>And here's the MIDI mapping:</strong><br>" +
                                    "<table style=\"font-family: courier; border-collapse: collapse; margin-top: .5em;\">" +
                                        "<tr><td class=\"midiKick\" style=\"padding: 0 1em 0 1.5em;\">C0</td><td>Kick</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">C#0</td><td>Snare Ghost Note</td></tr>" +
                                        "<tr><td class=\"midiSnare\" style=\"padding: 0 1em 0 1.5em;\">D0</td><td>Snare Main Hit</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">A0</td><td>Rack Tom 1</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">A#0</td><td>Rack Tom 2</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">B0</td><td>Floor Tom 1</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">C1</td><td>Floor Tom 2</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">F1</td><td>Hat Tip Tight</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">F#1</td><td>Hat Edge Tight</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">G1</td><td>Hat Tip Closed</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">G#1</td><td>Hat Edge Closed</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">A1</td><td>Hat Open 1</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">A#1</td><td>Hat Open 2</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">B1</td><td>Hat Open 3</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">C2</td><td>Hat Pedal</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">C#2</td><td>Hat Pedal Ching</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">E2</td><td>Crash L 1</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">F2</td><td>Crash L 1 Choke</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">F#2</td><td>Crash R</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">G2</td><td>Crash R: Choke</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">G#2</td><td>Crash L 2</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">A2</td><td>Crash L 2 Choke</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">C#3</td><td>Ride Bell</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">D3</td><td>Ride Bow</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">F3</td><td>China</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">F#3</td><td>China: Choke</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">C#3</td><td>Splash L</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">D4</td><td>Splash L Choke</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">D#4</td><td>Splash R</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">E4</td><td>Splash R Choke</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">F4</td><td>Mini Hat</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">F#4</td><td>Stack</td></tr>" +
                                    "</table>",
                                },
                                2: {
                                    id: "Bass",
                                    html:
                                    "<p>" +
                                    "All the bass is programmed and you can find the bass MIDI files in the /MIDI folder. " +
                                    "All of the bass tracks on the album were done with Sumbission Audio's DjinnBass sample library. " +
                                    "Most of the bass tones on the album we're processed using the NeuralDSP's Parallax plugin.<br>" +
                                    "</p>",
                                },
                                3: {
                                    id: "Guitars",
                                    html:
                                    "<p>All of the guitars track on the album (rhytms, leads, drones, cleans) were recorded in my home studio (fancy way of saying \"a table and an audio interface in my living room\").</p>" +
                                    "<strong>Gear used for guitar tracking:</strong><br>" +
                                    "<ul>" +
                                        "<li>Solar A1.6D 27 Baritone guitar (with the stock pickups)</li>" +
                                        "<li>Focusrite Scarlett Solo Gen 3 audio interface</li>" +
                                        "<li>Radial PRO48 active DI box</li>" +
                                        "<li>Daddario EXL157 strings</li>" +
                                        "<li>StringJoy custom strings, gauges: .074 .052 .044 .028w .022 .016 (used for the drop F tuning in \"Spectre\")</li>" +
                                        "<li>Janicek Picks Jazz B 0.88mm guitar picks</li>" +
                                    "</ul>" +
                                    "<strong>Tones:</strong><br><br>" +
                                    "<table style=\"border-collapse: collapse;\">" +
                                        "<tr>" +
                                            "<td>" +
                                                "<strong>Rhytms: </strong>" +
                                            "</td>" +
                                            "<td>" +
                                                "NeuralDSP Archetype Nolly (using an IR that comes with the plugin, no external IR)" +
                                            "</td>" +
                                        "</tr>" +
                                        "<tr>" +
                                            "<td>" +
                                                "<strong>Leads: </strong>" +
                                            "</td>" +
                                            "<td>" +
                                                "NeuralDSP Archetype Abasi (using an IR that comes with the plugin, no external IR)" +
                                            "</td>" +
                                        "</tr>" +
                                            "<td>" +
                                                "<strong>Cleans: </strong>" +
                                            "</td>" +
                                            "<td>" +
                                                "NeuralDSP Archetype Plini (cab sim turned off)" +
                                            "</td>" +
                                        "</tr>" +
                                    "</table>"
                                },
                                4: {
                                    id: "Synths",
                                    html: 
                                    "<p>" +
                                        "All the extra instruments and synths on the album are programmed. Here's a list of some of the kontakt libraries used:" +
                                    "</p>" +
                                    "<ul>" +
                                        "<li>" +
                                            "Fracture Sounds' Woodchester Piano (kontakt library)" +
                                        "</li>" +
                                        "<li>" +
                                            "u-he Diva (synth plugin)" +
                                        "</li>" +
                                        "<li>" +
                                            "Best Service's Emotional Cello (kontakt library)" +
                                        "</li>" +
                                        "<li>" +
                                            "Heavyocity's Gravity (kontakt library)" +
                                        "</li>" +
                                        "<li>" +
                                            "Heavyocity's Mosaic Tape (kontakt library)" +
                                        "</li>" +
                                        "<li>" +
                                            "Finishing Move's Posthuman (kontakt library)" +
                                        "</li>" +
                                    "</ul>"
                                }
                            },
                        }
                    },
                    6: {
                        timeStart: 1435.4,
                        mediaName: "Ruin",
                        downloads: {
                            mp3: "media/sounds/mp3/7.mp3",
                        },
                        info: {
                            image: "media/images/dreamer_album.jpg",
                            icon: "media/icons/dreamer_album.png",
                            composer: "Michal Diviš",
                            lang: "eng", // ISO 639-2
                            year: 2021,
                            genres: {
                                0: "Metal",
                                1: "Progressive rock",
                                2: "Djent",
                            },
                            label: "",
                            bpm: "135",
                            isrc: "",
                            copyright: "(c) 2021 Michal Diviš",
                            anyHtml: {
                                0: {
                                    id: "Song tempo",
                                    html: "135BPM",
                                },
                                1: {
                                    id: "<div class=\"drumsHeader\" style=\"width: min-content;\">Drums</div>",
                                    html: 
                                    "<p>" +
                                        "All drums are programmed and you can find the drum MIDI files in the /MIDI folder. " + 
                                        "Here's a list of all the sample libraries / samples used for different kit pieces:.<br>" + 
                                    "</p>" +
                                    "<div class=\"kickBlendedHeader\" style=\"font-weight: bold; width: min-content; white-space: nowrap;\">Kick (blended):</div>" +
                                    "<ul><li>GGD OKW Modern Fusion - the main kick</li><li>GGD Modern & Massive - 26x14 Yamaha kick</li><li>custom one shot kick sample</li></ul>" +
                                    "<div class=\"snareBlendedHeader\" style=\"width: min-content; white-space: nowrap; font-weight: bold;\">Snare (blended):</div>" +
                                    "<ul><li>Nolly's Secret Sauce snare (a freebie Nolly gave out in 2019)</li><li>GGD P4 - The VK snare</li><li>GGD OKW Metal - the main snare (only the room mics)</li></ul>" +
                                    "<strong>Toms:</strong><br>" +
                                    "<ul><li>GGD P4 toms</li></ul>" +
                                    "<strong>Cymbals:</strong><br>" +
                                    "<ul><li>GGD P4 toms</li></ul>" +
                                    "<strong>And here's the MIDI mapping:</strong><br>" +
                                    "<table style=\"font-family: courier; border-collapse: collapse; margin-top: .5em;\">" +
                                        "<tr><td class=\"midiKick\" style=\"padding: 0 1em 0 1.5em;\">C0</td><td>Kick</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">C#0</td><td>Snare Ghost Note</td></tr>" +
                                        "<tr><td class=\"midiSnare\" style=\"padding: 0 1em 0 1.5em;\">D0</td><td>Snare Main Hit</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">A0</td><td>Rack Tom 1</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">A#0</td><td>Rack Tom 2</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">B0</td><td>Floor Tom 1</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">C1</td><td>Floor Tom 2</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">F1</td><td>Hat Tip Tight</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">F#1</td><td>Hat Edge Tight</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">G1</td><td>Hat Tip Closed</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">G#1</td><td>Hat Edge Closed</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">A1</td><td>Hat Open 1</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">A#1</td><td>Hat Open 2</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">B1</td><td>Hat Open 3</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">C2</td><td>Hat Pedal</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">C#2</td><td>Hat Pedal Ching</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">E2</td><td>Crash L 1</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">F2</td><td>Crash L 1 Choke</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">F#2</td><td>Crash R</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">G2</td><td>Crash R: Choke</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">G#2</td><td>Crash L 2</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">A2</td><td>Crash L 2 Choke</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">C#3</td><td>Ride Bell</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">D3</td><td>Ride Bow</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">F3</td><td>China</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">F#3</td><td>China: Choke</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">C#3</td><td>Splash L</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">D4</td><td>Splash L Choke</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">D#4</td><td>Splash R</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">E4</td><td>Splash R Choke</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">F4</td><td>Mini Hat</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">F#4</td><td>Stack</td></tr>" +
                                    "</table>",
                                },
                                2: {
                                    id: "Bass",
                                    html:
                                    "<p>" +
                                    "All the bass is programmed and you can find the bass MIDI files in the /MIDI folder. " +
                                    "All of the bass tracks on the album were done with Sumbission Audio's DjinnBass sample library. " +
                                    "Most of the bass tones on the album we're processed using the NeuralDSP's Parallax plugin.<br>" +
                                    "</p>",
                                },
                                3: {
                                    id: "Guitars",
                                    html:
                                    "<p>All of the guitars track on the album (rhytms, leads, drones, cleans) were recorded in my home studio (fancy way of saying \"a table and an audio interface in my living room\").</p>" +
                                    "<strong>Gear used for guitar tracking:</strong><br>" +
                                    "<ul>" +
                                        "<li>Solar A1.6D 27 Baritone guitar (with the stock pickups)</li>" +
                                        "<li>Focusrite Scarlett Solo Gen 3 audio interface</li>" +
                                        "<li>Radial PRO48 active DI box</li>" +
                                        "<li>Daddario EXL157 strings</li>" +
                                        "<li>StringJoy custom strings, gauges: .074 .052 .044 .028w .022 .016 (used for the drop F tuning in \"Spectre\")</li>" +
                                        "<li>Janicek Picks Jazz B 0.88mm guitar picks</li>" +
                                    "</ul>" +
                                    "<strong>Tones:</strong><br><br>" +
                                    "<table style=\"border-collapse: collapse;\">" +
                                        "<tr>" +
                                            "<td>" +
                                                "<strong>Rhytms: </strong>" +
                                            "</td>" +
                                            "<td>" +
                                                "NeuralDSP Archetype Nolly (using an IR that comes with the plugin, no external IR)" +
                                            "</td>" +
                                        "</tr>" +
                                        "<tr>" +
                                            "<td>" +
                                                "<strong>Leads: </strong>" +
                                            "</td>" +
                                            "<td>" +
                                                "NeuralDSP Archetype Abasi (using an IR that comes with the plugin, no external IR)" +
                                            "</td>" +
                                        "</tr>" +
                                            "<td>" +
                                                "<strong>Cleans: </strong>" +
                                            "</td>" +
                                            "<td>" +
                                                "NeuralDSP Archetype Plini (cab sim turned off)" +
                                            "</td>" +
                                        "</tr>" +
                                    "</table>"
                                },
                                4: {
                                    id: "Synths",
                                    html: 
                                    "<p>" +
                                        "All the extra instruments and synths on the album are programmed. Here's a list of some of the kontakt libraries used:" +
                                    "</p>" +
                                    "<ul>" +
                                        "<li>" +
                                            "Fracture Sounds' Woodchester Piano (kontakt library)" +
                                        "</li>" +
                                        "<li>" +
                                            "u-he Diva (synth plugin)" +
                                        "</li>" +
                                        "<li>" +
                                            "Best Service's Emotional Cello (kontakt library)" +
                                        "</li>" +
                                        "<li>" +
                                            "Heavyocity's Gravity (kontakt library)" +
                                        "</li>" +
                                        "<li>" +
                                            "Heavyocity's Mosaic Tape (kontakt library)" +
                                        "</li>" +
                                        "<li>" +
                                            "Finishing Move's Posthuman (kontakt library)" +
                                        "</li>" +
                                    "</ul>"
                                }
                            },
                        }
                    },
                    7: {
                        timeStart: 1543.5,
                        mediaName: "World Eater",
                        downloads: {
                            mp3: "media/sounds/mp3/8.mp3",
                        },
                        info: {
                            image: "media/images/dreamer_album.jpg",
                            icon: "media/icons/dreamer_album.png",
                            composer: "Michal Diviš",
                            lang: "eng", // ISO 639-2
                            year: 2021,
                            genres: {
                                0: "Metal",
                                1: "Progressive rock",
                                2: "Djent",
                            },
                            label: "",
                            bpm: "140",
                            isrc: "",
                            copyright: "(c) 2021 Michal Diviš",
                            anyHtml: {
                                0: {
                                    id: "Song tempo",
                                    html: "140BPM",
                                },
                                1: {
                                    id: "<div class=\"drumsHeader\" style=\"width: min-content;\">Drums</div>",
                                    html: 
                                    "<p>" +
                                        "All drums are programmed and you can find the drum MIDI files in the /MIDI folder. " + 
                                        "Here's a list of all the sample libraries / samples used for different kit pieces:.<br>" + 
                                    "</p>" +
                                    "<div class=\"kickBlendedHeader\" style=\"font-weight: bold; width: min-content; white-space: nowrap;\">Kick (blended):</div>" +
                                    "<ul><li>GGD OKW Modern Fusion - the main kick</li><li>GGD Modern & Massive - 26x14 Yamaha kick</li><li>custom one shot kick sample</li></ul>" +
                                    "<div class=\"snareBlendedHeader\" style=\"width: min-content; white-space: nowrap; font-weight: bold;\">Snare (blended):</div>" +
                                    "<ul><li>Nolly's Secret Sauce snare (a freebie Nolly gave out in 2019)</li><li>GGD P4 - The VK snare</li><li>GGD OKW Metal - the main snare (only the room mics)</li></ul>" +
                                    "<strong>Toms:</strong><br>" +
                                    "<ul><li>GGD P4 toms</li></ul>" +
                                    "<strong>Cymbals:</strong><br>" +
                                    "<ul><li>GGD P4 toms</li></ul>" +
                                    "<strong>And here's the MIDI mapping:</strong><br>" +
                                    "<table style=\"font-family: courier; border-collapse: collapse; margin-top: .5em;\">" +
                                        "<tr><td class=\"midiKick\" style=\"padding: 0 1em 0 1.5em;\">C0</td><td>Kick</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">C#0</td><td>Snare Ghost Note</td></tr>" +
                                        "<tr><td class=\"midiSnare\" style=\"padding: 0 1em 0 1.5em;\">D0</td><td>Snare Main Hit</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">A0</td><td>Rack Tom 1</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">A#0</td><td>Rack Tom 2</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">B0</td><td>Floor Tom 1</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">C1</td><td>Floor Tom 2</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">F1</td><td>Hat Tip Tight</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">F#1</td><td>Hat Edge Tight</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">G1</td><td>Hat Tip Closed</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">G#1</td><td>Hat Edge Closed</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">A1</td><td>Hat Open 1</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">A#1</td><td>Hat Open 2</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">B1</td><td>Hat Open 3</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">C2</td><td>Hat Pedal</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">C#2</td><td>Hat Pedal Ching</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">E2</td><td>Crash L 1</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">F2</td><td>Crash L 1 Choke</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">F#2</td><td>Crash R</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">G2</td><td>Crash R: Choke</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">G#2</td><td>Crash L 2</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">A2</td><td>Crash L 2 Choke</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">C#3</td><td>Ride Bell</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">D3</td><td>Ride Bow</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">F3</td><td>China</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">F#3</td><td>China: Choke</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">C#3</td><td>Splash L</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">D4</td><td>Splash L Choke</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">D#4</td><td>Splash R</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">E4</td><td>Splash R Choke</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">F4</td><td>Mini Hat</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">F#4</td><td>Stack</td></tr>" +
                                    "</table>",
                                },
                                2: {
                                    id: "Bass",
                                    html:
                                    "<p>" +
                                    "All the bass is programmed and you can find the bass MIDI files in the /MIDI folder. " +
                                    "All of the bass tracks on the album were done with Sumbission Audio's DjinnBass sample library. " +
                                    "Most of the bass tones on the album we're processed using the NeuralDSP's Parallax plugin.<br>" +
                                    "</p>",
                                },
                                3: {
                                    id: "Guitars",
                                    html:
                                    "<p>All of the guitars track on the album (rhytms, leads, drones, cleans) were recorded in my home studio (fancy way of saying \"a table and an audio interface in my living room\").</p>" +
                                    "<strong>Gear used for guitar tracking:</strong><br>" +
                                    "<ul>" +
                                        "<li>Solar A1.6D 27 Baritone guitar (with the stock pickups)</li>" +
                                        "<li>Focusrite Scarlett Solo Gen 3 audio interface</li>" +
                                        "<li>Radial PRO48 active DI box</li>" +
                                        "<li>Daddario EXL157 strings</li>" +
                                        "<li>StringJoy custom strings, gauges: .074 .052 .044 .028w .022 .016 (used for the drop F tuning in \"Spectre\")</li>" +
                                        "<li>Janicek Picks Jazz B 0.88mm guitar picks</li>" +
                                    "</ul>" +
                                    "<strong>Tones:</strong><br><br>" +
                                    "<table style=\"border-collapse: collapse;\">" +
                                        "<tr>" +
                                            "<td>" +
                                                "<strong>Rhytms: </strong>" +
                                            "</td>" +
                                            "<td>" +
                                                "NeuralDSP Archetype Nolly (using an IR that comes with the plugin, no external IR)" +
                                            "</td>" +
                                        "</tr>" +
                                        "<tr>" +
                                            "<td>" +
                                                "<strong>Leads: </strong>" +
                                            "</td>" +
                                            "<td>" +
                                                "NeuralDSP Archetype Abasi (using an IR that comes with the plugin, no external IR)" +
                                            "</td>" +
                                        "</tr>" +
                                            "<td>" +
                                                "<strong>Cleans: </strong>" +
                                            "</td>" +
                                            "<td>" +
                                                "NeuralDSP Archetype Plini (cab sim turned off)" +
                                            "</td>" +
                                        "</tr>" +
                                    "</table>"
                                },
                                4: {
                                    id: "Synths",
                                    html: 
                                    "<p>" +
                                        "All the extra instruments and synths on the album are programmed. Here's a list of some of the kontakt libraries used:" +
                                    "</p>" +
                                    "<ul>" +
                                        "<li>" +
                                            "Fracture Sounds' Woodchester Piano (kontakt library)" +
                                        "</li>" +
                                        "<li>" +
                                            "u-he Diva (synth plugin)" +
                                        "</li>" +
                                        "<li>" +
                                            "Best Service's Emotional Cello (kontakt library)" +
                                        "</li>" +
                                        "<li>" +
                                            "Heavyocity's Gravity (kontakt library)" +
                                        "</li>" +
                                        "<li>" +
                                            "Heavyocity's Mosaic Tape (kontakt library)" +
                                        "</li>" +
                                        "<li>" +
                                            "Finishing Move's Posthuman (kontakt library)" +
                                        "</li>" +
                                    "</ul>"
                                }
                            },
                        }
                    },
                    8: {
                        timeStart: 1870,
                        mediaName: "Collapse",
                        downloads: {
                            mp3: "media/sounds/mp3/9.mp3",
                        },
                        info: {
                            image: "media/images/dreamer_album.jpg",
                            icon: "media/icons/dreamer_album.png",
                            composer: "Michal Diviš",
                            lang: "eng", // ISO 639-2
                            year: 2021,
                            genres: {
                                0: "Metal",
                                1: "Progressive rock",
                                2: "Djent",
                            },
                            label: "",
                            bpm: "210",
                            isrc: "",
                            copyright: "(c) 2021 Michal Diviš",
                            anyHtml: {
                                0: {
                                    id: "Song tempo",
                                    html: "210BPM",
                                },
                                1: {
                                    id: "<div class=\"drumsHeader\" style=\"width: min-content;\">Drums</div>",
                                    html: 
                                    "<p>" +
                                        "All drums are programmed and you can find the drum MIDI files in the /MIDI folder. " + 
                                        "Here's a list of all the sample libraries / samples used for different kit pieces:.<br>" + 
                                    "</p>" +
                                    "<div class=\"kickBlendedHeader\" style=\"font-weight: bold; width: min-content; white-space: nowrap;\">Kick (blended):</div>" +
                                    "<ul><li>GGD OKW Modern Fusion - the main kick</li><li>GGD Modern & Massive - 26x14 Yamaha kick</li><li>custom one shot kick sample</li></ul>" +
                                    "<div class=\"snareBlendedHeader\" style=\"width: min-content; white-space: nowrap; font-weight: bold;\">Snare (blended):</div>" +
                                    "<ul><li>Nolly's Secret Sauce snare (a freebie Nolly gave out in 2019)</li><li>GGD P4 - The VK snare</li><li>GGD OKW Metal - the main snare (only the room mics)</li></ul>" +
                                    "<strong>Toms:</strong><br>" +
                                    "<ul><li>GGD P4 toms</li></ul>" +
                                    "<strong>Cymbals:</strong><br>" +
                                    "<ul><li>GGD P4 toms</li></ul>" +
                                    "<strong>And here's the MIDI mapping:</strong><br>" +
                                    "<table style=\"font-family: courier; border-collapse: collapse; margin-top: .5em;\">" +
                                        "<tr><td class=\"midiKick\" style=\"padding: 0 1em 0 1.5em;\">C0</td><td>Kick</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">C#0</td><td>Snare Ghost Note</td></tr>" +
                                        "<tr><td class=\"midiSnare\" style=\"padding: 0 1em 0 1.5em;\">D0</td><td>Snare Main Hit</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">A0</td><td>Rack Tom 1</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">A#0</td><td>Rack Tom 2</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">B0</td><td>Floor Tom 1</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">C1</td><td>Floor Tom 2</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">F1</td><td>Hat Tip Tight</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">F#1</td><td>Hat Edge Tight</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">G1</td><td>Hat Tip Closed</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">G#1</td><td>Hat Edge Closed</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">A1</td><td>Hat Open 1</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">A#1</td><td>Hat Open 2</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">B1</td><td>Hat Open 3</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">C2</td><td>Hat Pedal</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">C#2</td><td>Hat Pedal Ching</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">E2</td><td>Crash L 1</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">F2</td><td>Crash L 1 Choke</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">F#2</td><td>Crash R</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">G2</td><td>Crash R: Choke</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">G#2</td><td>Crash L 2</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">A2</td><td>Crash L 2 Choke</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">C#3</td><td>Ride Bell</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">D3</td><td>Ride Bow</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">F3</td><td>China</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">F#3</td><td>China: Choke</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">C#3</td><td>Splash L</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">D4</td><td>Splash L Choke</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">D#4</td><td>Splash R</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">E4</td><td>Splash R Choke</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">F4</td><td>Mini Hat</td></tr>" +
                                        "<tr><td style=\"padding: 0 1em 0 1.5em;\">F#4</td><td>Stack</td></tr>" +
                                    "</table>",
                                },
                                2: {
                                    id: "Bass",
                                    html:
                                    "<p>" +
                                    "All the bass is programmed and you can find the bass MIDI files in the /MIDI folder. " +
                                    "All of the bass tracks on the album were done with Sumbission Audio's DjinnBass sample library. " +
                                    "Most of the bass tones on the album we're processed using the NeuralDSP's Parallax plugin.<br>" +
                                    "</p>",
                                },
                                3: {
                                    id: "Guitars",
                                    html:
                                    "<p>All of the guitars track on the album (rhytms, leads, drones, cleans) were recorded in my home studio (fancy way of saying \"a table and an audio interface in my living room\").</p>" +
                                    "<strong>Gear used for guitar tracking:</strong><br>" +
                                    "<ul>" +
                                        "<li>Solar A1.6D 27 Baritone guitar (with the stock pickups)</li>" +
                                        "<li>Focusrite Scarlett Solo Gen 3 audio interface</li>" +
                                        "<li>Radial PRO48 active DI box</li>" +
                                        "<li>Daddario EXL157 strings</li>" +
                                        "<li>StringJoy custom strings, gauges: .074 .052 .044 .028w .022 .016 (used for the drop F tuning in \"Spectre\")</li>" +
                                        "<li>Janicek Picks Jazz B 0.88mm guitar picks</li>" +
                                    "</ul>" +
                                    "<strong>Tones:</strong><br><br>" +
                                    "<table style=\"border-collapse: collapse;\">" +
                                        "<tr>" +
                                            "<td>" +
                                                "<strong>Rhytms: </strong>" +
                                            "</td>" +
                                            "<td>" +
                                                "NeuralDSP Archetype Nolly (using an IR that comes with the plugin, no external IR)" +
                                            "</td>" +
                                        "</tr>" +
                                        "<tr>" +
                                            "<td>" +
                                                "<strong>Leads: </strong>" +
                                            "</td>" +
                                            "<td>" +
                                                "NeuralDSP Archetype Abasi (using an IR that comes with the plugin, no external IR)" +
                                            "</td>" +
                                        "</tr>" +
                                            "<td>" +
                                                "<strong>Cleans: </strong>" +
                                            "</td>" +
                                            "<td>" +
                                                "NeuralDSP Archetype Plini (cab sim turned off)" +
                                            "</td>" +
                                        "</tr>" +
                                    "</table>"
                                },
                                4: {
                                    id: "Synths",
                                    html: 
                                    "<p>" +
                                        "All the extra instruments and synths on the album are programmed. Here's a list of some of the kontakt libraries used:" +
                                    "</p>" +
                                    "<ul>" +
                                        "<li>" +
                                            "Fracture Sounds' Woodchester Piano (kontakt library)" +
                                        "</li>" +
                                        "<li>" +
                                            "u-he Diva (synth plugin)" +
                                        "</li>" +
                                        "<li>" +
                                            "Best Service's Emotional Cello (kontakt library)" +
                                        "</li>" +
                                        "<li>" +
                                            "Heavyocity's Gravity (kontakt library)" +
                                        "</li>" +
                                        "<li>" +
                                            "Heavyocity's Mosaic Tape (kontakt library)" +
                                        "</li>" +
                                        "<li>" +
                                            "Finishing Move's Posthuman (kontakt library)" +
                                        "</li>" +
                                    "</ul>"
                                }
                            },
                        }
                    }
                }
            },
            slideShow: {
                pictures: {
                    // Mirrors
                    0: {
                        timeStart: 0,
                        mediaName: "Mirrors",
                        src: "media/images/mirrors.jpg"
                    },
                    // Dreamer
                    1: {
                        timeStart: 270000,
                        mediaName: "Dreamer",
                        src: "media/images/dreamer_album.jpg"
                    },
                    // Ornaments
                    2: {
                        timeStart: 538500,
                        mediaName: "Ornaments_w_vocals",
                        src: "media/images/ornaments_w_vocals.jpg"
                    },
                    // Labyrinth
                    3: {
                        timeStart: 786600,
                        mediaName: "Labyrinth",
                        src: "media/images/labyrinth.jpg"
                    },
                    // Spectre
                    4: {
                        timeStart: 959500,
                        mediaName: "Spectre",
                        src: "media/images/spectre.jpg"
                    },
                    5: {
                        timeStart: 964400,
                        mediaName: "Mirrors",
                        src: "media/images/mirrors.jpg"
                    },
                    9: {
                        timeStart: 992650,
                        mediaName: "DJinn",
                        src: "media/images/djinn.png"
                    },
                    10: {
                        timeStart: 1025276,
                        mediaName: "Ornaments",
                        src: "media/images/ornaments.jpg"
                    },
                    11: {
                        timeStart: 1035846,
                        mediaName: "Kraken",
                        src: "media/images/kraken.jpg"
                    },
                    12: {
                        timeStart: 1047635,
                        mediaName: "Labyrinth",
                        src: "media/images/labyrinth.jpg"
                    },
                    13: {
                        timeStart: 1060993,
                        mediaName: "DJinn",
                        src: "media/images/djinn.png"
                    },
                    14: {
                        timeStart: 1104890,
                        mediaName: "Spectre",
                        src: "media/images/spectre.jpg"
                    },
                    15: {
                        timeStart: 1129367,
                        mediaName: "Ornaments_w_vocals",
                        src: "media/images/ornaments_w_vocals.jpg"
                    },
                    16: {
                        timeStart: 1140658,
                        mediaName: "DJinn",
                        src: "media/images/djinn.png"
                    },
                    17: {
                        timeStart: 1162594,
                        mediaName: "Kraken",
                        src: "media/images/kraken.jpg"
                    },
                    18: {
                        timeStart: 1179314,
                        mediaName: "Mirrors",
                        src: "media/images/mirrors.jpg"
                    },
                    19: {
                        timeStart: 1201160,
                        mediaName: "Spectre",
                        src: "media/images/spectre.jpg"
                    },
                    // Bloom
                    20: {
                        timeStart: 1215000,
                        mediaName: "Dreamer",
                        src: "media/images/dreamer_album.jpg"
                    },
                    // Ruin
                    21: {
                        timeStart: 1435400,
                        mediaName: "Dreamer",
                        src: "media/images/dreamer_album.jpg"
                    },
                    // World Eater
                    22: {
                        timeStart: 1543500,
                        mediaName: "Dreamer",
                        src: "media/images/dreamer_album.jpg"
                    },
                    // Collapse
                    23: {
                        timeStart: 1870000,
                        mediaName: "Dreamer",
                        src: "media/images/dreamer_album.jpg"
                    },
                }
            },
            "cssTimeModyfier": {
                "selectors": {
                    "nolan": "img[src^=\"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/7QCEUG\"]",
                    "jurta": "img[src^=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAACWCAY\"]",
                    "marcel": "img[src^=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJgAAACYCAY\"]",
                    "midiSnare": ".midiSnare, .snareBlendedHeader",
                    "midiKick": ".midiKick, .kickBlendedHeader"
                },
                "css": {
                    "fx1": {
                        "entrance": {
                            "borderColor": "var(--currentTime)",
                            "transition": "all 0.3s ease-out"
                        },
                        "outgoing": {
                            "borderColor": "transparent",
                            "transition": "all 0.3s ease-out"
                        }
                    },
                    "midiSnare": {
                        "entrance": {
                            "color": "var(--currentTime)",
                            "scale": 1.1,
                            "transition": "none"
                        },
                        "outgoing": {
                            "color": "rgba(255,255,255,1)",
                            "scale": 1,
                            "transition": "all 0.3s ease-out"
                        }
                    },
                    "midiKick": {
                        "entrance": {
                            "color": "var(--currentTime)",
                            "scale": 1.1,
                            "transition": "none"
                        },
                        "outgoing": {
                            "color": "rgba(255,255,255,1)",
                            "scale": 1,
                            "transition": "all 0.3s ease-out"
                        }
                    }
                },
                "default": {
                    "cssKey": "fx1",
                    "length": 53
                },
                "commandsInTime": {
                    "0": {
                        "selectorsKey": "nolan",
                        "cssKey": "fx1",
                        "length": 0
                    },
                    "1": {
                        "selectorsKey": "jurta",
                        "cssKey": "fx1",
                        "length": 0
                    },
                    "2": {
                        "selectorsKey": "marcel",
                        "cssKey": "fx1",
                        "length": 0
                    },
                    "3": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick",
                        "length": 0
                    },
                    "4": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare",
                        "length": 0
                    },
                    "556973": {
                        "selectorsKey": "nolan",
                        "length": 17238
                    },
                    "573965": {
                        "selectorsKey": "jurta",
                        "length": 14899
                    },
                    "591910": {
                        "selectorsKey": "jurta",
                        "length": 32473
                    },
                    "626856": {
                        "selectorsKey": "nolan",
                        "length": 16039
                    },
                    "655596": {
                        "selectorsKey": "jurta",
                        "length": 63872
                    },
                    "721927": {
                        "selectorsKey": "jurta",
                        "length": 32718
                    },
                    "755034": {
                        "selectorsKey": "nolan",
                        "length": 22386
                    },
                    "993039": {
                        "selectorsKey": "marcel",
                        "length": 33991
                    },
                    "1036907": {
                        "selectorsKey": "marcel",
                        "length": 138490
                    },
                    "1179447": {
                        "selectorsKey": "marcel",
                        "length": 34322
                    },
                    "1545045": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1545366": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1545473": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1545688": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1545902": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1546223": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1546330": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1546545": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1546759": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1546973": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1547295": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1547402": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1547616": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1547830": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1548152": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1548259": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1548473": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1548580": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1548687": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1548794": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1548901": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1549116": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1549330": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1549545": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1549866": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1549973": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1550188": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1550509": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1550616": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1550830": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1551045": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1551152": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1551259": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1551473": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1551688": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1551902": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1552223": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1552330": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1552545": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1552759": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1553080": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1553188": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1553402": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1553616": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1553830": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1554152": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1554259": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1554473": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1554688": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1555009": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1555116": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1555330": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1555438": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1555545": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1555652": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1555759": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1555973": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1556188": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1556402": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1556723": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1556830": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1557045": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1557366": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1557473": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1557688": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1557902": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1558223": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1558330": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1558545": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1558759": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1559080": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1559188": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1559402": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1559616": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1559938": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1560045": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1560259": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1560473": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1560688": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1561009": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1561116": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1561330": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1561545": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1561866": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1561973": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1562188": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1562295": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1562402": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1562509": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1562616": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1562830": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1563045": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1563259": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1563580": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1563688": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1563902": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1564223": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1564330": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1564545": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1564759": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1564866": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1564973": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1565188": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1565402": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1565616": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1565938": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1566045": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1566259": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1566473": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1566795": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1566902": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1567116": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1567330": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1567545": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1567866": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1567973": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1568188": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1568402": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1568723": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1568830": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1569045": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1569152": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1569259": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1569366": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1569473": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1569688": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1569902": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1570116": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1570438": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1570545": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1570759": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1571080": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1571188": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1571402": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1571616": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1571723": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1571830": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1572045": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1572259": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1572473": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1572580": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1573116": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1573223": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1573336": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1573759": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1573973": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1574402": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1574616": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1574830": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1575046": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1575077": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1575473": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1575688": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1575902": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1576330": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1576759": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1576790": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1577188": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1577402": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1577830": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1578045": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1578259": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1578473": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1578505": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1578902": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1579116": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1579330": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1579759": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1580188": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1580219": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1580616": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1580830": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1581259": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1581263": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1581473": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1581480": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1581688": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1581902": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1582759": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1583188": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1583616": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1583622": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1584045": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1584259": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1584688": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1584691": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1584902": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1584908": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1585116": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1585330": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1585545": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1585759": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1585973": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1586188": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1586402": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1586616": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1586830": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1587045": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1587050": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1587259": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1587473": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1587688": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1587902": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1588116": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1588330": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1588545": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1588759": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1588760": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1588973": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1589188": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1589402": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1589616": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1589830": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1590045": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1590259": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1590473": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1590479": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1590688": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1590902": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1591116": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1591330": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1591545": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1591759": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1591973": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1592188": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1592189": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1592402": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1592616": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1592830": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1592831": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1593045": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1593152": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1593259": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1593366": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1593473": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1593580": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1593688": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1593795": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1593902": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1593907": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1594009": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1594010": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1594116": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1594223": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1594330": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1594438": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1594545": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1594652": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1594759": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1594866": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1594973": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1594977": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1595080": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1595188": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1595194": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1595295": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1595402": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1595509": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1595616": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1595617": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1595723": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1595724": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1595830": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1595938": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1596045": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1596152": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1596259": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1596366": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1596473": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1596581": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1596688": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1596796": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1596903": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1597010": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1597117": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1597224": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1597331": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1597335": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1597438": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1597546": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1597653": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1597760": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1597763": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1597867": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1597974": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1597977": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1598081": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1598188": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1598296": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1598403": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1598410": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1598510": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1598617": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1598622": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1598724": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1598831": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1598938": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1599046": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1599153": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1599260": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1599367": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1599474": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1599581": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1599688": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1599796": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1599903": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1599973": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1600046": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1600117": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1600331": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1600403": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1600474": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1600546": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1600760": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1601188": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1601260": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1601331": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1601403": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1601617": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1601688": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1601760": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1601831": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1602474": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1602546": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1602617": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1602688": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1602903": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1603117": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1603760": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1603974": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1604188": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1604403": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1604831": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1605046": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1605474": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1605546": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1605617": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1605688": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1605903": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1605974": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1606046": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1606117": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1606760": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1606831": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1606903": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1606974": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1607188": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1607260": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1607331": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1607403": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1607617": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1608046": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1608117": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1608188": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1608260": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1608473": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1608546": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1608617": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1608688": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1609331": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1609403": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1609474": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1609546": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1609760": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1609974": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1610617": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1610831": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1611046": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1611260": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1611474": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1611688": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1611903": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1612117": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1612331": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1612438": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1612546": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1612653": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1612760": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1612867": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1612974": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1613081": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1613188": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1613296": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1613403": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1613510": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1613617": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1613688": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1613760": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1613831": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1614046": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1614117": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1614188": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1614260": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1614474": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1614902": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1614974": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1615046": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1615117": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1615330": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1615403": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1615474": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1615546": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1616188": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1616260": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1616331": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1616403": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1616617": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1616831": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1617475": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1617688": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1617903": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1618117": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1618546": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1618760": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1619188": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1619260": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1619331": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1619403": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1619617": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1619688": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1619760": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1619831": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1620474": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1620546": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1620617": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1620688": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1620903": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1620974": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1621046": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1621117": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1621331": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1621760": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1621831": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1621903": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1621974": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1622188": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1622260": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1622331": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1622403": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1622617": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1622688": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1622760": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1622831": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1623046": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1623117": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1623188": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1623260": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1623474": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1623546": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1623617": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1623688": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1624331": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1624546": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1624760": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1624974": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1625188": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1625403": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1625617": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1625831": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1626046": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1626153": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1626260": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1626367": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1626474": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1626546": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1626617": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1626688": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1626760": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1626831": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1627331": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1627653": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1627974": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1628081": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1628188": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1628510": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1628831": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1629260": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1629474": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1629688": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1629903": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1630117": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1630331": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1630546": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1630760": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1631081": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1631403": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1631510": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1631617": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1631938": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1632260": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1632688": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1632903": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1633117": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1633331": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1633546": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1633760": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1633974": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1634188": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1634403": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1634510": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1634724": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1634831": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1634903": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1634974": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1635046": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1635367": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1635688": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1636117": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1636331": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1636546": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1636760": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1636867": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1636974": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1637081": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1637188": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1637296": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1637403": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1637510": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1637617": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1637938": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1638260": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1638367": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1638474": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1638796": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1639117": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1639546": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1639760": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1639974": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1640188": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1640831": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1641046": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1641367": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1641688": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1641796": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1641903": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1642224": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1642546": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1642974": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1643188": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1643403": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1643617": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1643831": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1644046": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1644260": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1644474": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1644796": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1645117": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1645224": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1645331": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1645653": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1645974": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1646403": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1646617": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1646831": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1647046": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1647260": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1647474": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1647688": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1647903": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1648117": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1648224": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1648438": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1648546": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1648617": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1648688": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1648760": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1649081": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1649403": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1649831": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1650046": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1650260": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1650474": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1650581": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1650688": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1650796": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1650903": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1651010": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1651117": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1651224": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1651331": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1651546": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1651653": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1651760": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1651867": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1651974": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1652617": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1653117": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1653188": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1653260": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1654117": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1654224": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1654331": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1654438": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1654760": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1655081": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1655188": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1655403": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1655617": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1655938": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1656046": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1656260": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1656474": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1656688": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1657010": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1657117": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1657331": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1657546": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1657867": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1657974": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1658188": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1658296": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1658403": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1658510": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1658617": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1658831": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1659045": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1659260": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1659581": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1659688": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1659903": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1660224": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1660331": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1660546": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1660760": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1660867": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1660974": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1661188": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1661403": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1661617": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1661938": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1662046": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1662260": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1662474": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1662796": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1662903": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1663117": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1663331": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1663546": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1663867": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1663974": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1664188": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1664403": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1664724": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1664831": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1665046": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1665153": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1665260": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1665367": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1665474": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1665688": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1665902": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1666117": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1666438": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1666546": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1666760": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1667081": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1667188": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1667403": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1667617": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1668046": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1668260": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1668474": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1669117": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1669224": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1669331": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1669653": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1669760": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1669974": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1670188": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1670403": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1670724": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1670831": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1671046": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1671260": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1671581": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1671688": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1671903": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1672010": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1672117": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1672224": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1672331": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1672546": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1672759": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1672974": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1673296": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1673403": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1673617": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1673938": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1674046": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1674260": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1674474": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1674581": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1674688": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1674903": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1675117": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1675331": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1675653": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1675760": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1675974": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1676188": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1676510": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1676617": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1676831": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1677046": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1677260": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1677581": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1677688": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1677903": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1678117": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1678438": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1678546": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1678760": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1678867": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1678974": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1679081": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1679188": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1679403": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1679616": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1679831": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1680153": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1680260": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1680474": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1680796": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1680903": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1681331": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1681974": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1682188": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1682189": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1682617": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1682831": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1683260": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1683474": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1683688": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1683903": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1683933": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1684331": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1684546": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1684760": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1685188": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1685616": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1685646": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1686046": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1686260": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1686688": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1686690": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1686903": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1686907": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1687117": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1687330": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1687546": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1687759": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1687973": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1688188": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1688403": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1688617": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1688831": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1689046": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1689049": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1689260": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1689474": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1689688": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1689903": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1690117": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1690331": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1690546": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1690759": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1690760": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1690974": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1691188": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1691403": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1691617": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1691831": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1692046": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1692260": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1692474": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1692478": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1692688": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1692903": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1693117": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1693331": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1693546": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1693760": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1693974": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1694187": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1694295": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1694403": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1694510": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1694616": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1694723": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1694830": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1694937": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1695046": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1695117": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1695188": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1695260": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1695474": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1695546": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1695617": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1695688": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1695903": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1696331": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1696403": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1696474": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1696546": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1696760": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1696831": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1696903": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1696974": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1697617": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1697688": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1697760": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1697831": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1698046": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1698260": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1698903": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1699117": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1699331": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1699546": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1699974": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1700188": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1700617": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1700688": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1700760": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1700831": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1701046": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1701117": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1701188": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1701260": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1701903": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1701974": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1702046": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1702117": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1702331": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1702403": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1702474": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1702546": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1702760": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1703188": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1703260": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1703331": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1703403": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1703617": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1703688": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1703760": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1703831": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1704474": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1704546": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1704617": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1704688": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1704903": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1705117": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1705760": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1705974": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1706188": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1706403": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1706617": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1706831": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1707046": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1707260": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1707474": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1707581": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1707688": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1707796": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1707903": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1708010": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1708117": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1708224": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1708331": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1708438": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1708546": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1708653": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1708760": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1708831": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1708903": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1708974": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1709188": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1709260": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1709331": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1709403": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1709617": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1710046": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1710117": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1710188": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1710260": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1710474": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1710546": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1710617": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1710688": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1710903": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1711010": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1711117": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1711224": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1711331": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1711403": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1711474": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1711546": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1711760": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1711974": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1712617": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1712831": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1713046": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1713260": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1713688": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1713903": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1714331": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1714403": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1714474": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1714546": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1714760": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1714974": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1715617": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1715688": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1715760": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1715831": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1716046": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1716117": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1716188": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1716260": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1716474": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1716903": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1716974": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1717046": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1717117": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1717331": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1717403": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1717474": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1717546": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1717760": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1717831": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1717903": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1717974": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1718188": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1718260": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1718331": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1718403": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1718617": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1718688": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1718760": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1718831": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1719474": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1719688": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1719903": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1720117": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1720331": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1720546": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1720760": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1720974": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1721188": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1721296": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1721403": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1721510": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1721617": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1721688": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1721760": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1721831": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1721903": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1721974": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1722474": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1722795": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1723117": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1723224": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1723331": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1723653": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1723974": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1724403": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1724617": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1724831": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1725045": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1725260": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1725474": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1725688": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1725903": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1726224": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1726545": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1726653": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1726760": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1727081": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1727403": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1727831": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1728045": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1728260": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1728474": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1728688": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1728903": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1729117": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1729331": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1729545": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1729653": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1729867": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1729974": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1730045": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1730117": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1730188": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1730510": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1730831": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1731260": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1731474": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1731688": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1731903": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1732010": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1732117": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1732224": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1732331": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1732438": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1732545": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1732653": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1732760": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1733081": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1733403": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1733510": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1733617": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1733938": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1734260": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1734688": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1734903": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1735117": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1735331": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1736188": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1736510": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1736831": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1736938": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1737045": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1737367": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1737688": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1738117": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1738331": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1738545": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1738760": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1738974": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1739188": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1739403": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1739617": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1739938": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1740260": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1740367": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1740474": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1740795": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1741117": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1741545": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1741760": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1741974": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1742188": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1742403": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1742617": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1742831": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1743045": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1743260": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1743367": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1743581": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1743688": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1743760": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1743831": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1743903": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1744224": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1744545": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1744974": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1745188": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1745403": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1745617": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1745724": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1745831": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1745938": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1746045": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1746153": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1746260": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1746367": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1746474": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1746795": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1747117": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1747224": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1747331": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1747653": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1747974": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1748403": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1748617": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1748831": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1749045": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1749153": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1749260": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1749367": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1749474": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1749581": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1749903": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1770260": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1770474": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1770903": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1771331": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1771760": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1772188": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1772617": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1773045": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1773474": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1773688": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1773903": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1774331": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1774760": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1775188": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1775617": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1776045": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1776474": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1776903": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1777331": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1777760": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1778188": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1778617": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1779045": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1779474": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1779903": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1780331": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1780760": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1781188": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1781617": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1782045": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1782474": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1782903": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1783331": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1783760": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1783974": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1784188": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1784617": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1785045": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1785474": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1785903": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1786331": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1786760": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1787188": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1787403": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1787617": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1788045": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1788474": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1788903": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1789331": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1789760": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1790188": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1790617": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1790831": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1791045": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1791474": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1791903": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1792331": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1792760": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1793188": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1793617": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1794045": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1794260": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1794474": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1794903": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1795331": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1795760": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1796188": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1796617": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1797045": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1797474": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1797688": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1797903": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1798331": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1798760": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1799188": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1799617": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1800045": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1800474": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1800903": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1801331": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1801760": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1802188": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1802617": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1803045": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1803474": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1803903": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1804010": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1804117": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1804224": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1804331": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1804438": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1804545": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1804653": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1804760": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1806688": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1806903": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1807117": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1807331": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1808617": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1808724": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1808831": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1808938": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1809045": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1809153": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1809260": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1809331": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1809403": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1809903": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1810224": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1810331": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1810545": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1810760": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1811081": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1811188": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1811403": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1811617": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1811831": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1812153": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1812260": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1812474": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1812688": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1813010": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1813117": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1813331": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1813438": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1813545": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1813653": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1813760": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1813974": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1814188": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1814403": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1814831": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1815045": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1815367": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1815474": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1815688": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1815903": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1816010": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1816117": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1816331": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1816545": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1816760": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1816974": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1817081": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1817188": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1817403": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1817617": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1817938": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1818045": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1818260": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1818474": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1818688": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1819010": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1819117": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1819331": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1819545": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1819867": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1819974": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1820081": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1820188": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1820295": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1820403": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1820510": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1820617": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1820831": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1821045": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1821260": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1821581": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1821688": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1821903": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1822117": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1822224": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1822438": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1822759": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1823080": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1823187": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1823403": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1823617": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1823937": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1824045": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1824259": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1824473": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1824688": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1825009": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1825117": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1825331": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1825545": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1825866": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1825974": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1826187": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1826295": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1826402": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1826509": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1826616": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1826830": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1827045": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1827260": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1827687": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1827902": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1828223": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1828330": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1828545": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1828653": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1828759": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1828760": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1828866": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1828973": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1829187": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1829402": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1829616": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1829831": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1829937": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1830044": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1830259": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1830473": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1830794": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1830902": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1831117": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1831330": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1831544": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1831866": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1831973": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1832187": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1832403": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1832974": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1948932": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1948969": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1952531": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1952981": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1953131": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1953431": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1953731": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1954181": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1954331": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1954631": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1954931": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1955231": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1955681": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1955831": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1956131": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1956431": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1956881": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1957031": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1957331": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1957481": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1957632": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1957781": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1957931": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1958231": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1958531": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1958831": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1959281": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1959431": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1959731": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1960331": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1960631": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1960931": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1961381": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1961531": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1961831": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1962131": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1962431": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1962881": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1963031": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1963331": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1963631": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1964081": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1964231": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1964531": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1964681": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1964831": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1964981": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1965131": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1965431": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1965731": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1965881": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1966031": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1966059": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1966931": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1967381": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1967531": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1967831": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1968131": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1968581": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1968731": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1969031": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1969331": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1969631": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1970081": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1970231": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1970531": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1970831": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1971281": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1971431": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1971731": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1971881": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1972032": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1972181": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1972331": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1972631": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1972931": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1973081": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1973156": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1973231": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1973681": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1973831": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1973981": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1974131": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1974581": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1974731": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1975031": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1975331": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1975781": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1975931": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1976231": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1976531": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1976831": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1977281": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1977431": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1977731": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1978031": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1978481": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1978631": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1978931": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1979081": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1979232": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1979381": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1979531": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1979831": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1980131": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1980281": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1980356": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1980431": {
                        "selectorsKey": "midiSnare",
                        "cssKey": "midiSnare"
                    },
                    "1980581": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1980731": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    },
                    "1981031": {
                        "selectorsKey": "midiKick",
                        "cssKey": "midiKick"
                    }
                }
            }
        };
        
        console.log("[RPlayer] Config: ",this.conf);

    }

}