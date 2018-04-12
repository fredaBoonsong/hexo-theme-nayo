// 引入loading的样式
import loading from '../css/_import/loading.styl'


module.exports.init = () => {

    document.onreadystatechange = () => {

        if (document.readyState === 'loading') {
            window.setTimeout(() => {
                removeLoading()
            }, 1000)
        }
        if (document.readyState === 'interactive') {
            window.setTimeout(() => {
                removeLoading()
            }, 1000)
        }
    }

}


function removeLoading() {

    let page = document.getElementById('page'),
        loading = document.getElementById('loading')

    page.classList.remove('hidden')
    loading.classList.add('hidden')
}