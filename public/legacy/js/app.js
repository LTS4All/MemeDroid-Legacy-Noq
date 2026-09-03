/* ES5, XMLHttpRequest, JSON.parse — iOS 6 Safari */
(function () {
  function $(id) { return document.getElementById(id); }

  function getJSON(url, cb) {
    var x = new XMLHttpRequest();
    x.onreadystatechange = function () {
      if (x.readyState !== 4) return;
      if (x.status >= 200 && x.status < 300) {
        try { cb(null, JSON.parse(x.responseText)); }
        catch (e) { cb(e); }
      } else {
        cb(new Error("http " + x.status));
      }
    };
    x.open("GET", url, true);
    x.send(null);
  }

  function qs(name) {
    var s = window.location.search.replace(/^\?/, "").split("&");
    var i, p;
    for (i = 0; i < s.length; i++) {
      p = s[i].split("=");
      if (decodeURIComponent(p[0]) === name) return decodeURIComponent(p[1] || "");
    }
    return "";
  }

  function age(h) {
    if (h < 1) return "now";
    if (h < 24) return Math.round(h) + "h";
    return Math.round(h / 24) + "d";
  }

  function esc(s) {
    return String(s)
      .replace(/&/g, "&")
      .replace(/</g, "<")
      .replace(/>/g, ">")
      .replace(/"/g, """);
  }

  function card(m) {
    return (
      '<div class="card">' +
        '<h2><a href="meme.html?id=' + encodeURIComponent(m.id) + '">' + esc(m.title) + "</a></h2>" +
        '<div class="meta">by ' + esc(m.author) + " · " + age(m.hoursAgo) + "</div>" +
        '<div class="pic"><a href="meme.html?id=' + encodeURIComponent(m.id) + '"><img src="' + esc(m.image) + '" alt=""></a></div>' +
        '<div class="bar"><span class="score">' + m.score + "%</span> · " + m.votes + " votes</div>" +
      "</div>"
    );
  }

  function loadFeed() {
    var g = qs("g") || "trending";
    var q = qs("q");
    var links = document.getElementById("sub").getElementsByTagName("a");
    var i, href;
    for (i = 0; i < links.length; i++) {
      href = links[i].getAttribute("href") || "";
      if (href.indexOf("g=" + g) !== -1) links[i].className = "on";
    }
    var url = "/api/feed?g=" + encodeURIComponent(g);
    if (q) url += "&q=" + encodeURIComponent(q);
    getJSON(url, function (err, data) {
      var box = $("feed");
      if (err || !data || !data.memes) {
        box.innerHTML = '<p id="status">Could not load the feed. Try again.</p>';
        return;
      }
      if (!data.memes.length) {
        box.innerHTML = '<p id="status">No memes in this gallery.</p>';
        return;
      }
      var html = "";
      for (i = 0; i < data.memes.length; i++) html += card(data.memes[i]);
      box.innerHTML = html;
    });
  }

  function loadMeme() {
    var id = qs("id");
    if (!id) return;
    getJSON("/api/meme/" + encodeURIComponent(id), function (err, data) {
      var box = $("detail");
      if (err || !data || !data.meme) {
        box.innerHTML = '<p id="status">Meme not found.</p>';
        return;
      }
      var m = data.meme;
      var html =
        '<div class="card">' +
          "<h2>" + esc(m.title) + "</h2>" +
          '<div class="meta">by ' + esc(m.author) + " · " + age(m.hoursAgo) + "</div>" +
          '<div class="pic"><img src="' + esc(m.image) + '" alt=""></div>' +
          '<div class="bar"><span class="score">' + m.score + "%</span> · " + m.votes + " votes</div>" +
        "</div>" +
        '<div class="card" style="padding:12px"><h2>Comments</h2>';
      var c = m.comments || [];
      var i;
      if (!c.length) html += '<p class="meta">No comments yet.</p>';
      for (i = 0; i < c.length; i++) {
        html +=
          '<div class="comment"><b>' + esc(c[i].user) + "</b> · " + age(c[i].hoursAgo) +
          "<br>" + esc(c[i].text) + "</div>";
      }
      html += "</div>";
      box.innerHTML = html;
    });
  }

  function loadGen() {
    getJSON("/api/templates", function (err, data) {
      if (err || !data) return;
      var sel = $("tpl");
      var i, t, o;
      for (i = 0; i < data.templates.length; i++) {
        t = data.templates[i];
        o = document.createElement("option");
        o.value = t.image;
        o.appendChild(document.createTextNode(t.name));
        sel.appendChild(o);
      }
      if (data.templates[0]) {
        $("stageimg").src = data.templates[0].image;
      }
    });
    $("tpl").onchange = function () {
      $("stageimg").src = this.value;
    };
    $("top").onkeyup = $("top").onchange = function () {
      $("cap-top").innerHTML = esc(this.value);
    };
    $("bot").onkeyup = $("bot").onchange = function () {
      $("cap-bot").innerHTML = esc(this.value);
    };
  }

  window.MDLegacy = { loadFeed: loadFeed, loadMeme: loadMeme, loadGen: loadGen };
})();
