export class Helper {

    static reIndexArray(unIndexedArray) {
	    let tempArray = [];
    	for(let i=0; i<unIndexedArray.length; i++) {
        	tempArray.push(unIndexedArray[i]);
    	}
    	return tempArray;
    }

    static getItemIDFromUrl() {
        const urlArray = window.location.pathname.split('/');
        return urlArray[urlArray.length-1];
    }

}