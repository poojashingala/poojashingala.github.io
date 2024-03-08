/*
 *  yahiarefaiea-official-website-beta 1.0.0
 *
 *  I’m a 22 years old handsome guy who grows up in a small town in Syria.
 *  http://beta.yahiarefaiea.com/
 *  hello@yahiarefaiea.com
 *
 *  Last update on: 2019/8/17
 *  ©2019 Yahia Refaiea. all rights reserved.
 */

/* function inputTest(that) {
    var field = $(that).closest('.field');
    var form = $(that).closest('form, .form');
    var length = $.trim($(that).val()).length;
  
    //  FILLED
    if (length > 0) field.addClass('filled');
    else field.removeClass('filled');
  
    //  VALIDATED
    if (length >= 4) {
        field.addClass('validated');
        form.addClass('validated');
    } else {
        field.removeClass('validated');
        form.removeClass('validated');
    }
} */
function getPixel(e, t, n) {
    var i = 4 * (t + e.width * n),
        o = e.data;
    return { r: o[i], g: o[i + 1], b: o[i + 2], a: o[i + 3] };
}
function contact() {
    1 == contactAvailability &&
        setTimeout(function () {
            $(".template[data-template=contact] .field").find("input, textarea").focus(), Identity.robot();
        }, 1.25 * Identity.duration);
}
function notFound() {
    setTimeout(function () {
        Timer.run(
            ".template[data-template=notFound] time",
            function () {
                Router.route("#");
            },
            5
        );
    }, 1.25 * Identity.duration);
}
function notFoundCallback() {
    Timer.reset();
}

(function (e) {
    var t = new Array(),
        n = new Array(),
        i = function () {},
        o = 0,
        r = { splashVPos: "35%", loaderVPos: "75%", splashID: "#jpreContent", showSplash: !0, showPercentage: !0, autoClose: !0, closeBtnText: "Start!", onetimeLoad: !1, debugMode: !1, splashFunction: function () {} },
        a = function () {
            if (r.onetimeLoad) {
                for (var e, t = document.cookie.split("; "), n = 0; (e = t[n] && t[n].split("=")); n++) if ("jpreLoader" === e.shift()) return e.join("=");
                return !1;
            }
            return !1;
        },
        s = function (e) {
            if (r.onetimeLoad) {
                var t = new Date();
                t.setDate(t.getDate() + e);
                var n = null == e ? "" : "expires=" + t.toUTCString();
                document.cookie = "jpreLoader=loaded; " + n;
            }
        },
        l = function () {
            if (((jOverlay = e("<div></div>").attr("id", "jpreOverlay").css({ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", zIndex: 9999999 }).appendTo("body")), r.showSplash)) {
                jContent = e("<div></div>").attr("id", "jpreSlide").appendTo(jOverlay);
                var t = e(window).width() - e(jContent).width();
                e(jContent).css({ position: "absolute", top: r.splashVPos, left: Math.round((50 / e(window).width()) * t) + "%" }),
                    e(jContent).html(e(r.splashID).wrap("<div/>").parent().html()),
                    e(r.splashID).remove(),
                    r.splashFunction();
            }
            jLoader = e("<div></div>").attr("id", "jpreLoader").appendTo(jOverlay);
            var n = e(window).width() - e(jLoader).width();
            e(jLoader).css({ position: "absolute", top: r.loaderVPos, left: Math.round((50 / e(window).width()) * n) + "%" }),
                (jBar = e("<div></div>").attr("id", "jpreBar").css({ width: "0%", height: "100%" }).appendTo(jLoader)),
                r.showPercentage && (jPer = e("<div></div>").attr("id", "jprePercentage").css({ position: "relative", height: "100%" }).appendTo(jLoader).html("Loading...")),
                r.autoclose ||
                    (jButton = e("<div></div>")
                        .attr("id", "jpreButton")
                        .on("click", function () {
                            p();
                        })
                        .css({ position: "relative", height: "100%" })
                        .appendTo(jLoader)
                        .text(r.closeBtnText)
                        .hide());
        },
        c = function (n) {
            e(n)
                .find("*:not(script)")
                .each(function () {
                    var n = "";
                    if (-1 == e(this).css("background-image").indexOf("none") && -1 == e(this).css("background-image").indexOf("-gradient")) {
                        if (((n = e(this).css("background-image")), -1 != n.indexOf("url"))) {
                            var i = n.match(/url\((.*?)\)/);
                            n = i[1].replace(/\"/g, "");
                        }
                    } else "img" == e(this).get(0).nodeName.toLowerCase() && void 0 !== e(this).attr("src") && (n = e(this).attr("src"));
                    n.length > 0 && t.push(n);
                });
        },
        u = function () {
            for (var e = 0; e < t.length; e++) d(t[e]);
        },
        d = function (t) {
            var i = new Image();
            e(i)
                .load(function () {
                    f();
                })
                .error(function () {
                    n.push(e(this).attr("src")), f();
                })
                .attr("src", t);
        },
        f = function () {
            o++;
            var n = Math.round((o / t.length) * 100);
            if (
                (e(jBar)
                    .stop()
                    .animate({ width: n + "%" }, 500, "linear"),
                r.showPercentage && e(jPer).text(n + "%"),
                o >= t.length)
            ) {
                if (((o = t.length), s(), r.showPercentage && e(jPer).text("100%"), r.debugMode)) {
                    h();
                }
                e(jBar)
                    .stop()
                    .animate({ width: "100%" }, 500, "linear", function () {
                        r.autoClose ? p() : e(jButton).fadeIn(1e3);
                    });
            }
        },
        p = function () {
            e(jOverlay).fadeOut(800, function () {
                e(jOverlay).remove(), i();
            });
        },
        h = function () {
            if (n.length > 0) {
                var e = "ERROR - IMAGE FILES MISSING!!!\n\r";
                (e += n.length + " image files cound not be found. \n\r"), (e += "Please check your image paths and filenames:\n\r");
                for (var t = 0; t < n.length; t++) e += "- " + n[t] + "\n\r";
                return !0;
            }
            return !1;
        };
    e.fn.jpreLoader = function (t, n) {
        return (
            t && e.extend(r, t),
            "function" == typeof n && (i = n),
            e("body").css({ display: "block" }),
            this.each(function () {
                a() ? (e(r.splashID).remove(), i()) : (l(), c(this), u());
            })
        );
    };
})(jQuery),
    
    
/* $(document).ready(function () {
    $(".field")
        .find("input, textarea")
        .keyup(function () {
            inputTest(this);
        });
}), */
$(document).ready(function () {
    $(".list")
        .find("li.listItem a, li.archived a")
        .hover(
            function () {
                $(this).closest(".list").addClass("hover");
            },
            function () {
                $(this).closest(".list").removeClass("hover");
            }
        );
});
var Timer = {
    length: null,
    time: null,
    selector: null,
    interval: null,
    callback: null,
    run: function (e, t, n) {
        (Timer.length = n), (Timer.time = Timer.length), (Timer.selector = e), (Timer.callback = t), $(Timer.selector).text(Timer.length), (Timer.interval = setInterval(Timer.count, 1e3));
    },
    count: function () {
        (Timer.time = Timer.time - 1), $(Timer.selector).text(Timer.time), Timer.time <= 0 && ("function" == typeof Timer.callback && Timer.callback && Timer.callback(), Timer.reset());
    },
    reset: function () {
        clearInterval(Timer.interval), (Timer.length = null), (Timer.time = null), (Timer.selector = null), (Timer.interval = null), (Timer.callback = null);
    },
},
Identity = {
    duration: 1400,
    delay: 500,
    iteration: 0,
    processing: !1,
    enough: !1,
    interval: null,
    callback: null,
    status: "loading",
    id: "#identity",
    selector: "#identity div",
    classes: "working rest robot",
    work: function () {
        "loading" != Identity.status && (Identity.status = "working"),
            Identity.wait(function () {
                $(Identity.id).addClass("working");
            });
    },
    robot: function () {
        (Identity.status = "robot"),
            Identity.wait(function () {
                $(Identity.id).addClass("robot");
            });
    },
    rest: function () {
        Identity.abort(),
            (Identity.status = "rest"),
            setTimeout(function () {
                Identity.abort(), $(Identity.id).addClass("rest");
            }, Identity.delay);
    },
    wait: function (e) {
        1 != Identity.processing &&
            (Identity.abort(),
            (Identity.processing = !0),
            setTimeout(function () {
                "function" == typeof e && e && e(), Identity.waiting(), (Identity.interval = setInterval(Identity.waiting, Identity.duration));
            }, Identity.delay));
    },
    waiting: function () {
        if (1 != Identity.enough) return void ++Identity.iteration;
        Identity.stopping();
    },
    stop: function (e) {
        setTimeout(function () {
            1 == Identity.processing &&
                ((Identity.enough = !0), (Identity.callback = e), $(Identity.selector).attr("style", "animation-iteration-count: " + Identity.iteration + "; -webkit-animation-iteration-count: " + Identity.iteration + ";"));
        }, Identity.delay);
    },
    stopping: function () {
        clearInterval(Identity.interval), Identity.rest(), "function" == typeof Identity.callback && Identity.callback && Identity.callback(), Identity.reset();
    },
    abort: function () {
        "robot" == Identity.status
            ? $(Identity.id).removeClass("robot")
            : "loading" != Identity.status && 1 != Identity.processing
            ? ($(Identity.id).removeClass(Identity.classes + " loading"), $("#burger").removeClass("loading"))
            : $(Identity.id).removeClass(Identity.classes);
    },
    reset: function () {
        (Identity.iteration = 0), (Identity.processing = !1), (Identity.enough = !1), (Identity.interval = null), (Identity.callback = null), $(Identity.selector).removeAttr("style");
    },
};

$(document).ready(function () {
    $("#burger").on("click", function (e) {
        $(".wrapper").toggleClass("balls"), e.preventDefault();
    }),
        $(".wrapper:not(.balls) #identity > div").on("click", function (e) {
            $(".wrapper").addClass("balls"), e.preventDefault();
        });
});

var Stars = {
    canvas: null,
    context: null,
    circleArray: [],
    colorArray: ['#4c1a22', '#4c1a23', '#5d6268', '#1f2e37', '#474848', '#542619', '#ead8cf', '#4c241f', '#d6b9b1', '#964a47'],

    mouseDistance: 50,
    radius: .5,
    maxRadius: 1.5,

    //  MOUSE
    mouse: {
        x: undefined,
        y: undefined,
        down: false,
        move: false
    },

    //  INIT
    init: function () {
        this.canvas = document.getElementById('stars');
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.canvas.style.display = 'block';
        this.context = this.canvas.getContext('2d');

        window.addEventListener('mousemove', this.mouseMove);
        window.addEventListener('resize', this.resize);

        this.prepare();
        this.animate();
    },

    //  CIRCLE
    Circle: function (x, y, dx, dy, radius, fill) {
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.radius = radius;
        this.minRadius = this.radius;

        this.draw = function () {
        Stars.context.beginPath();
        Stars.context.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        Stars.context.fillStyle = fill;
        Stars.context.fill();
        };

        this.update = function () {
        if (this.x + this.radius > Stars.canvas.width || this.x - this.radius < 0) this.dx = -this.dx;
        if (this.y + this.radius > Stars.canvas.height || this.y - this.radius < 0) this.dy = -this.dy;

        this.x += this.dx;
        this.y += this.dy;

        //  INTERACTIVITY
        if (Stars.mouse.x - this.x < Stars.mouseDistance && Stars.mouse.x - this.x > -Stars.mouseDistance && Stars.mouse.y - this.y < Stars.mouseDistance && Stars.mouse.y - this.y > -Stars.mouseDistance) {
            if (this.radius < Stars.maxRadius) this.radius += 1;
        } else if (this.radius > this.minRadius) {
            this.radius -= 1;
        }

        this.draw();
        };
    },
  
    //  PREPARE
    prepare: function () {
      this.circleArray = [];
  
      for (var i = 0; i < 1200; i++) {
        var radius = Stars.radius;
        var x = Math.random() * (this.canvas.width - radius * 2) + radius;
        var y = Math.random() * (this.canvas.height - radius * 2) + radius;
        var dx = (Math.random() - 0.5) * 1.5;
        var dy = (Math.random() - 1) * 1.5;
        var fill = this.colorArray[Math.floor(Math.random() * this.colorArray.length)];
  
        this.circleArray.push(new this.Circle(x, y, dx, dy, radius, fill));
      }
    },
  
    //  ANIMATE
    animate: function () {
      requestAnimationFrame(Stars.animate);
      Stars.context.clearRect(0, 0, Stars.canvas.width, Stars.canvas.height);
  
      for (var i = 0; i < Stars.circleArray.length; i++) {
        var circle = Stars.circleArray[i];
        circle.update();
      }
    },
  
    //  MOUSE MOVE
    mouseMove: function (event) {
      Stars.mouse.x = event.x;
      Stars.mouse.y = event.y;
    },
  
    //  RESIZE
    resize: function () {
      Stars.canvas.width = window.innerWidth;
      Stars.canvas.height = window.innerHeight;
    }
},
renderer,
scene,
camera,
ww,
wh,
particles;
(ww = window.innerWidth), 
(wh = window.innerHeight);

$.validator.addMethod("validatePhone", function(value, element) {
    var phoneRegex = /^(\+91-|\+91|0)?\d{10}$/;
    return phoneRegex.test(value);
}, "* Enter valid phone number");

var centerVector = new THREE.Vector3(0, 0, 0),
    previousTime = 0;
(speed = 10), (isMouseDown = !1);
var getImageData = function (image) {
    var canvas = document.createElement("canvas");
    (canvas.width = image.width), (canvas.height = image.height);
    var ctx = canvas.getContext("2d");
    return ctx.clearRect(0, 0, canvas.width, canvas.height), ctx.drawImage(image, 0, 0), ctx.getImageData(0, 0, image.width, image.height);
},
drawTheMap = function () {
    particles && scene.remove(particles), geometry && geometry.dispose(), material && material.dispose();
    var geometry = new THREE.Geometry(),
        material = new THREE.PointCloudMaterial();
    (material.vertexColors = !0), (material.transparent = !0);
    for (var y = 0, y2 = imagedata.height; y < y2; y += 1)
        for (var x = 0, x2 = imagedata.width; x < x2; x += 1)
            if (imagedata.data[4 * x + 4 * y * imagedata.width] > 0) {
                var vertex = new THREE.Vector3();
                (vertex.x = x - imagedata.width / 2 + 280), 
                (vertex.y = -y + imagedata.height / 2), 
                (vertex.z = 500 * -Math.random()), 
                (vertex.speed = Math.random() / speed + 0.015);
                var pixelColor = getPixel(imagedata, x, y),
                    color = "rgb(" + pixelColor.r + ", " + pixelColor.g + ", " + pixelColor.b + ")";
                    geometry.colors.push(new THREE.Color(color)), geometry.vertices.push(vertex);
            }
    (particles = new THREE.Points(geometry, material)), scene.add(particles), requestAnimationFrame(render);
},
init = function (image) {
    (renderer = new THREE.WebGLRenderer({ 
        canvas: document.getElementById("pooja"), 
        antialias: !0, 
        alpha: !0 
    })),
    renderer.setSize(ww, wh),
    (scene = new THREE.Scene()),
    (camera = new THREE.OrthographicCamera(ww / -2, ww / 2, wh / 2, wh / -2, 1, 1e3)),
    camera.position.set(0, -20, 4),
    camera.lookAt(centerVector),
    scene.add(camera),
    (camera.zoom = 1),
    camera.updateProjectionMatrix(),
    (imagedata = getImageData(image)),
    drawTheMap(),
    window.addEventListener("mousemove", onMousemove, !1),
    window.addEventListener("mousedown", onMousedown, !1),
    window.addEventListener("mouseup", onMouseup, !1),
    window.addEventListener("resize", onResize, !1);
},
onResize = function () {
    (ww = window.innerWidth), (wh = window.innerHeight), renderer.setSize(ww, wh), (camera.left = ww / -2), (camera.right = ww / 2), (camera.top = wh / 2), (camera.bottom = wh / -2), camera.updateProjectionMatrix();
},
onMouseup = function () {
    isMouseDown = !1;
},
onMousedown = function (e) {
    (isMouseDown = !0), (lastMousePos = { x: e.clientX, y: e.clientY });
},
onMousemove = function (e) {
    isMouseDown && ((camera.position.x += (e.clientX - lastMousePos.x) / 100), (camera.position.y -= (e.clientY - lastMousePos.y) / 100), camera.lookAt(centerVector), (lastMousePos = { x: e.clientX, y: e.clientY }));
},
render = function (e) {
    requestAnimationFrame(render),
        (particles.geometry.verticesNeedUpdate = !0),
        isMouseDown || ((camera.position.x += 0.06 * (0 - camera.position.x)), (camera.position.y += 0.06 * (0 - camera.position.y)), camera.lookAt(centerVector)),
        renderer.render(scene, camera);
},
Pooja = {
    load: function (page) {
        var route = "includes/images/pooja-home.png";
        /* "home" == page
            ? (route = "includes/images/pooja-home.png")
            : "contact" == page
            ? (route = "includes/images/contact.jpg")
            : "bucket" == page
            ? (route = "includes/images/skills.jpg")
            : "bucketAll" == page
            ? (route = "includes/images/skills.jpg")
            : "projectsAll" == page
            ? (route = "includes/images/yahiarefaiea-projects.png")
            : "thoughtsAll" == page
            ? (route = "includes/images/yahiarefaiea-thoughts.png")
            : "notFound" == page && (route = "includes/images/yahiarefaiea-notFound.png"); */
        var image = document.createElement("img");
        //n.crossOrigin = "Anonymous";
        (image.onload = function () {
            init(image);
        }),
        (image.src = route);
    },
},

Router = {
    wrapper: [],
    location: null,
    route: function (location, callback) {
        Identity.work(), 
        (Router.location = Router.processLocation(location)), 
        Router.routes(callback);
    },
    processLocation: function (location) {
        return void 0 === location && (location = window.location.hash), location.replace("#", "");
    },
    callback: function (callback) {
        $(".wrapper").removeClass("balls"),
            setTimeout(function () {
                Identity.stop(function () {
                    Router.updateWrapper(),
                    Router.updateTemplate(Router.wrapper[0]),
                    (window.location.hash = Router.location),
                    (Router.location = null),
                    md.mobile() || Pooja.load(Router.wrapper[0]),
                    Router.callbacks(Router.wrapper[0]),
                    "function" == typeof callback && callback && callback();
                });
            }, 200);
    },
    updateTemplate: function (template) {
        var templates = $(".template"),
            current = $(".template[data-template=" + template + "]");
            templates.removeClass("current"),
            setTimeout(function () {
                templates.hide(), current.show().addClass("current");
            }, 1120);
    },
    updateWrapper: function (push, pull) {
        push && Router.push(push), pull && Router.pull(pull);
        var wrapper = Router.wrapper.toString().replace(/,/g, " ");
        $(".wrapper").attr("class", "wrapper " + wrapper);
    },
    push: function (items) {
        items = items.split(' ');

        for (i = 0; i < items.length; i++) {
            if (!Router.wrapper.includes(items[i]) && items[i] != '') Router.wrapper.push(items[i]);
        }
    },
    pull: function (items) {
        items = items.split(' ');

        for (i = 0; i < items.length; i++) {
            if (Router.wrapper.includes(items[i]) && items[i] != '') Router.wrapper.splice(Router.wrapper.indexOf(items[i]), 1);
        }
    },
    listen: function () {
        $(".wrapper").on("click", ".router", function (e) {
            Router.route($(this).attr("href"), window[$(this).attr("data-callback")]), e.preventDefault();
        }),
            window.addEventListener("popstate", function (e) {
                Router.route(void 0);
            });
    },
};
(Router.routes = function (callback) {
    Router.wrapper = [];
    var location = Router.location.split("/").filter(Boolean);
    void 0 === location[0]
        ? Router.push("home")
        : "contact" == location[0] && void 0 === location[1]
        ? Router.push("contact")
        : "skills" == location[0] && void 0 === location[1]
        ? Router.push("skills")
        : "projects" == location[0] && void 0 === location[1]
        ? Router.push("projectsAll")
        : "thoughts" == location[0] && void 0 === location[1]
        ? Router.push("thoughtsAll")
        : Router.push("notFound"),
        Router.callback(callback);
}),
(Router.callbacks = function (wrapper) {
    "notFound" == wrapper && notFound();
});

var contactAvailability = !0,
    md = new MobileDetect(window.navigator.userAgent);

$(document).ready(function () {
    Identity.work(),
    $(".template main").mCustomScrollbar({ theme: "dark", autoHideScrollbar: true }),
    $("body").jpreLoader({ showSplash: !1, showPercentage: !1, loaderVPos: 0, splashVPos: 0 }, function () {
        Router.route(void 0, function () {
            Router.listen(),
            //Submit.listen(".submit"),
            md.mobile() || Stars.init()
        });
    });

    $("#contactForm").validate({
        rules: {
            name: "required",
            email: {
                required: true,
                email: true
            },
            phone: {
                required: true,
                validatePhone: true
            }
        },
        messages: {
            name: "Please enter your Name",
            phone: {
                required: "Please provide your phone number",
                validatePhone: "Please enter a valid phone number"
            },
            email: "Please enter a valid email address"
        },
      });
      $("#contactForm").on('submit', function(e){
        Identity.robot();
        var isvalid = $("#contactForm").valid();
        if (isvalid) {
            e.preventDefault();
            var queryString = $('#contactForm').serialize();
            $.ajax({
                type: 'POST',
                url: 'includes/php/form.php',
                data: queryString,
                error: function (XMLHttpRequest, textStatus, errorThrown) {
                    
                },
                success: function (data) {
                    //$('#contactForm').reset();
                    Identity.stop();
                    $('form[name="contact"]').find("textarea, :text").val("");
                    if(data == "success"){
                        var html = '<div class="success">Form submitted successfully.</div>';
                    }
                    else{ 
                        var html = '<div class="error">Something went wrong..Please try again later.</div>';
                    }
                    $('.contact-message').html(html);
                }
            });
        }
      })
});
