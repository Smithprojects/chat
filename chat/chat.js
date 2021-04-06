const getTemplate = (namechat = 'Active users', placeholder) => {
  let text = placeholder ?? 'Enter message'
  return `
      
        <div class="chat__nav-a nav-a bg-light py-2 card-header">
          <div class="nav-a__wrapper align-items-center row">
            <div class="nav-a__text col">
              <h6 class="mb-0">${namechat}</h6>
            </div>
            <div class="nav-a__button text-right col-auto">
              <div class="text-sans-serif btn-reveal-trigger dropdown">
                <button type="button" aria-haspopup="true" aria-expanded="false" class="btn-reveal text-600 btn btn-link btn-sm btn-close">
            
                </button>
                <div tabindex="-1" role="menu" aria-hidden="true" class="border py-0 dropdown-menu dropdown-menu-right">
                  <div class="bg-white py-2">
                    <button type="button" tabindex="0" role="menuitem" class="dropdown-item">View</button>
                    <button type="button" tabindex="0" role="menuitem" class="dropdown-item">Export</button>
                    <div tabindex="-1" class="dropdown-divider"></div>
                    <button type="button" tabindex="0" role="menuitem" class="text-danger dropdown-item">Remove</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="chat__messages messages">
          <div class="messages__wrap">
            
                      
          </div>

        </div>
        <div class="chat__input">
          <form action="" id="messForm">
            <input type="text" name="message" id="message" class="form-control" placeholder="${text}">
          </form>
        </div>

  `
}


export class Chat {
  constructor(selector, options) {
    this.$el = document.querySelector(selector)
    this.namechat = options.namechat
    this.username = options.name
    this.image = options.image
    this.options = options

    this.#render()
  }



  #render() {
    const {namechat} = this.options
    this.$el.classList.add('chat')
    this.$el.innerHTML = getTemplate(namechat)
    // this.$el.innerHTML = getTemplate(data, placeholder, this.selectedId)
  }
}