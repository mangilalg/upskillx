export default function usePageTitle({title = null}) {

    if(title != null){
        document.getElementById('title').innerHTML = title
    }
}