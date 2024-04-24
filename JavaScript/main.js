function update_iframe() {
    const input_box = document.getElementById('input-box');
    const input_value = input_box.value;
    console.log("Input value:", input_value);
    const video_id = get_video_id(input_value);

    if (!video_id) {
        alert('Please enter a valid YouTube video URL');
        return;
    }
    
    set_iframe_source(video_id);
}

function get_video_id(input) {
    const url = input;
    const regex = /^(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    const match = url.match(regex);
    return match ? match[1] : false;
}

function set_iframe_source(video_id) {
    const source_url = `https://www.youtube.com/embed/${video_id}`;
    const iframe = document.getElementById('iframe');
    iframe.src = source_url;
}