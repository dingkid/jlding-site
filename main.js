
class MyHeader extends HTMLElement {
    connectedCallback(){
        this.innerHTML = `
        <div class="pt-5 pb-4">
        <h1>Jay Ding</h1>
        <h6>Who let this bitch code?</h6>
        </div>
        `
    }
}

customElements.define('my-header', MyHeader)


class MyFooter extends HTMLElement {
    connectedCallback(){
        this.innerHTML = `
        <p class="footer-text py-3">The Man knows you're here. <br> Last edited December 6 2024.</p>
        `
    }
}

customElements.define('my-footer', MyFooter)

class MySidebar extends HTMLElement {
    connectedCallback(){
        this.innerHTML = `
        <h4>PAGES:</h4>
            <ul>
                <li class="sidebar-list"><a class="sidebar-link" href="index.html">Home</a></li>
                <li class="sidebar-list"><a class="sidebar-link" href="aboutme.html">About</a></li>
                <li class="sidebar-list"><a class="sidebar-link" href="#">Projects</a></li>
                <li class="sidebar-list"><a class="sidebar-link" href="changelog.html">Changelog</a></li>
            </ul>
        <h4>FIND ME:</h4>
            <ul>
            <li class="sidebar-list"><a class="sidebar-link" target="blank" href="https://osu.ppy.sh/users/18477206">osu!</a></li>
            </ul>

        <h4>A PHOTO OF MY CAT:</h4>
        <img class="cat-image" src="maomi1.png" alt="turkish angora cat loafing on a rug">

        <h4>OTHER COOL SITES:</h4>
            <ul>
                <li class="sidebar-list"><a class="sidebar-link" target="blank" href="http://peter.molzer.net" title="My cute bf's website">nerd's room</a></li>
                <li class="sidebar-list"><a class="sidebar-link" target="blank" href="http://trackthet.com" title="Train and Bus tracker">Track the T</a></li>
                <li class="sidebar-list"><a target="blank" href="https://blog.elaboraet.net"><img src="elaboraet.png"></a></li>
            </ul>
        `
    }
}

customElements.define('my-sidebar', MySidebar)


class MyButtons extends HTMLElement {
    connectedCallback(){
        this.innerHTML = `
        <div class="row" content-align="center">
        <a href="blog.elaboraet.net">
        <img src="elaboraet.png" alt="elaboraet's website button">
        </a>
        </div>
        `
    }
}

customElements.define('my-buttons', MyButtons)