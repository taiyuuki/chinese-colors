import type { Directive } from 'vue'

function isInViewPort(el: HTMLElement) {
    let parent = el.parentElement
    while (parent && !parent.classList.contains('scroll')) {
        parent = parent.parentElement
    }

    if (parent) {
        const { top: p_top } = parent.getBoundingClientRect()
        const { top } = el.getBoundingClientRect()
        const { clientHeight: p_clientHeight } = parent
        const { clientHeight } = el

        return top > p_top && top + clientHeight < p_top + p_clientHeight
    }
    
    return true
}

const vScrollview: Directive = (el: HTMLElement, bind) => {

    if (bind.value && bind.oldValue !== bind.value && !isInViewPort(el)) {

        el.scrollIntoView({ block: 'center', behavior: 'smooth' })
    }
}

export { vScrollview }
