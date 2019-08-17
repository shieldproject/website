;(function () {

  window.addEventListener('DOMContentLoaded', function (event) {
    document.body.addEventListener('click', function (event) {
      if (event.target.matches('h1[id], h2[id], h3[id], h4[id]')) {
        document.location.hash = '#'+event.target.getAttribute('id');
      }
    });

    (function () {
      let slugify = function (s) {
        return s.replace(/[^a-zA-Z0-9]+/, '-')
                .replace(/^-|-$/, '')
                .toLowerCase();
      };

      let autotocs = document.querySelectorAll("[data-autotoc-headings]");
      for (var i = 0; i < autotocs.length; i++) {
        let title = autotocs[i].getAttribute("data-autotoc-title");
        if (!title || title == "") {
          title = "Navigation";
        }

        let nav = document.querySelector(autotocs[i].getAttribute("data-autotoc-nav") || 'nav')
        if (!nav) {
          continue;
        }

        let headings = autotocs[i].querySelectorAll(autotocs[i].getAttribute("data-autotoc-headings"));
        if (headings.length == 0) {
          continue;
        }

        let toc = document.createElement("nav");
        let h2 = document.createElement('h2');
        h2.appendChild(document.createTextNode(title));
        toc.appendChild(h2);
        for (var j = 0; j < headings.length; j++) {
          let id = headings[j].getAttribute("id");
          if (!id || id == "") {
            id = slugify(headings[j].innerText);
            headings[j].setAttribute("id", id);
          }
          let a = document.createElement("a");
          a.setAttribute("href", "#"+id);
          a.appendChild(document.createTextNode(headings[j].innerText));

          let li = document.createElement("li");
          li.appendChild(a);
          toc.appendChild(li);
        }
        nav.appendChild(toc);
      }
    })();
  });
})();
