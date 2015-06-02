/**
 * Created by bwin on 5/17/15.
 */

function save_state(name, value){
    localStorage.setItem(name, JSON.stringify(value))
}
function load_state(name){
    return JSON.parse(localStorage.getItem(name));
}
window.clean_ux_storage = function(key){
    localStorage.removeItem(key);
};
module.exports = {
    save_state: save_state,
    load_state: load_state
};
