let vidSources = [
  "https://storage.googleapis.com/synthesia/videos/dad%20jokes%20blue%201.mp4",
  "https://storage.googleapis.com/synthesia/videos/dad%20jokes%20blue%202.mp4",
  "https://storage.googleapis.com/synthesia/videos/dad%20jokes%20blue%203.mp4",
  "https://storage.googleapis.com/synthesia/videos/dad%20jokes%20blue%204.mp4",
  "https://storage.googleapis.com/synthesia/videos/dad%20jokes%20blue%205.mp4",
  "https://storage.googleapis.com/synthesia/videos/dad%20jokes%20blue%206.mp4",
  "https://storage.googleapis.com/synthesia/videos/dad%20jokes%20pink%201.mp4",
  "https://storage.googleapis.com/synthesia/videos/dad%20jokes%20pink%202.mp4",
  "https://storage.googleapis.com/synthesia/videos/dad%20jokes%20pink%203.mp4",
  "https://storage.googleapis.com/synthesia/videos/dad%20jokes%20pink%204.mp4",
  "https://storage.googleapis.com/synthesia/videos/dad%20jokes%20pink%205.mp4",
  "https://storage.googleapis.com/synthesia/videos/dad%20jokes%20pink%206.mp4",
  "https://storage.googleapis.com/synthesia/videos/dad%20jokes%20yellow%201.mp4",
  "https://storage.googleapis.com/synthesia/videos/dad%20jokes%20yellow%202.mp4",
  "https://storage.googleapis.com/synthesia/videos/dad%20jokes%20yellow%203.mp4",
  "https://storage.googleapis.com/synthesia/videos/dad%20jokes%20yellow%204.mp4",
  "https://storage.googleapis.com/synthesia/videos/dad%20jokes%20yellow%205.mp4",
  "https://storage.googleapis.com/synthesia/videos/dad%20jokes%20yellow%206.mp4",
  "https://storage.googleapis.com/synthesia/videos/dad%20jokes%20yellow%207.mp4",
  "https://storage.googleapis.com/synthesia/videos/dad%20jokes%20yellow%208.mp4"
]

let vidElement = document.getElementById('currentVid');
vidElement.autoplay = true;

let activeVideo = Math.floor((Math.random() * vidSources.length));

vidElement.src = vidSources[activeVideo];
vidElement.load();
