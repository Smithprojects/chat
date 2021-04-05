const getTemplate = () => {
  return `
      <div id="chat" class="chat">
        <div class="chat__nav-a nav-a bg-light py-2 card-header">
          <div class="nav-a__wrapper align-items-center row">
            <div class="nav-a__text col">
              <h6 class="mb-0">Active Users</h6>
            </div>
            <div class="nav-a__button text-right col-auto">
              <div class="text-sans-serif btn-reveal-trigger dropdown">
                <button type="button" aria-haspopup="true" aria-expanded="false" class="btn-reveal text-600 btn btn-link btn-sm btn-close">
                  <!-- <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="ellipsis-h" class="btn-svg" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path fill="currentColor" d="M328 256c0 39.8-32.2 72-72 72s-72-32.2-72-72 32.2-72 72-72 72 32.2 72 72zm104-72c-39.8 0-72 32.2-72 72s32.2 72 72 72 72-32.2 72-72-32.2-72-72-72zm-352 0c-39.8 0-72 32.2-72 72s32.2 72 72 72 72-32.2 72-72-32.2-72-72-72z"></path>
                  </svg> -->
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
            <input type="text" name="message" id="message" class="form-control" placeholder="Введите сообщение">
          </form>
        </div>

      </div>
  `
}


export class Chat {
  constructor(selector, options) {
    this.$el = document.querySelector(selector)
    this.namechat = options.namechat
    this.username = options.name
    this.image = options.image

    this.#render()
  }



  #render() {
    const {placeholder, data} = this.options
    this.$el.classList.add('select')
    this.$el.innerHTML = getTemplate(data, placeholder, this.selectedId)
  }
}