ratio = {}


ratio.predicted = false;
ratio.predicted_pd = 0.0;

ratio.display_data = function(pd_width, pd_height, W, canvas){
    var pd_px_width = pd_width * canvas.width;
    var pd_px_height = pd_height * canvas.height;
    var pd_dist = Math.sqrt(pd_px_width * pd_px_width + pd_px_height * pd_px_height);
    var fc_px_w = W * canvas.width;
    var pd_ratio = pd_dist / fc_px_w;


    // document.getElementById("pd_display").innerText = pd_dist;
    // document.getElementById("fw_display").innerText = fc_px_w;
    // document.getElementById("ratio_display").innerText = pd_ratio;

    var predicted_pd = (0.100791707 * pd_dist) + (-0.0325460870 * fc_px_w) + (89.938948 * pd_ratio) + 598.0447436762962;
    if(!isNaN(predicted_pd)){
        ratio.predicted_pd = predicted_pd;
        ratio.predicted = true;
    }
    // document.getElementById("pd_real_display").innerText = predicted_pd;
}