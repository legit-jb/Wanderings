const sample = [
  {
    id: "15572374ghg",
    image:
      "https://maps.googleapis.com/maps/api/streetview?channel=mb-pdp-publicrecord&location=601+N+4th+St%2C+Philadelphia%2C+PA+19123&size=665x441&source=outdoor&client=gme-redfin&signature=-r9bhng_XkHepi3-Gqgy10icm0E=",
    name: "my old apt",
    lat: 39.96184,
    long: -75.14462,
    comments: "I really miss this place",
    tags: ["hipster", "home"],
  },
  {
    id: "155723342ghg",
    image:
      "https://www.highergroundscafe.com/uploads/b/0b694f4168c9c89c234c7495918c3b129a228aa6a0a1a6bac5a7c8aa673599ac/Screenshot_20200508-204218_Facebook_1588985171.jpg?width=400",
    name: "higher grounds cafe",
    lat: 39.96206,
    long: -75.14293,
    comments: "one of my best friends",
    tags: ["coffee", "hipster", "food"],
  },
  {
    id: "1455723342ghg",
    image: "https://theabbaye.net/wp-content/uploads/2020/08/abstract-1.jpg",
    name: "The Abbaye",
    lat: 39.96223,
    long: -75.14298,
    tags: ["hipster", "beer", "food", "dating"],
  },
  {
    id: "1242sa23342ghg",
    image: "https://cvws.icloud-content.com/S/ARWAMjCqpWXEaxxakwgFtb5EJ8SP/324006EE-4B26-4D27-856C-B6DCF3E47C06.JPG?o=An9kRhAJUc4mbD7Wxf4SynI51pUQzGZptuX4kex5nrJd&v=1&z=https%3A%2F%2Fp69-content.icloud.com%3A443&x=1&a=CAogEqySY-15iyHQBX7P1yrVMb4y-lre0qBg-4YABt9EQ2ASZRCLmfn8ly8Yi7CMgpgvIgEAUgREJ8SPaiUUvSZBrIa9lbGunwYl-7bLp0Y0MyHJ8Op2D-2kZ5szo1r3U1zIciUAaGbyEDPurUcRK_kIwAX1RHlsJEBSc3B6mxXaq0ka4EUObP5C&e=1621354551&r=cc9781cf-59f0-4812-ba14-4dac9d5db060-4&s=rR0A9Yc_cXyO15xD3F3_jzZVFsg",
    name: "pumpkin beer",
    lat: 39.96233,
    long: -75.14298,
    tags: ["hipster", "beer", "food", "dating"],
  },
  {
    id: "1hg242sa23342ghg",
    image: "https://cvws.icloud-content.com/S/AVI28ZZNrIuPQ1bV73dCJ6akOnX6/764697F4-FD42-47EE-8B23-AD8BCD011728.JPG?o=AmtRDHQLxRpkk0mE8h_SmYpj-gRxcxl7wvlX50aAAZsJ&v=1&z=https%3A%2F%2Fp69-content.icloud.com%3A443&x=1&a=CAogWihJ9ERfT8qaOa0mfU5bWiMmtYoD0JGlHeI-GT-CB4ESZRCKmfn8ly8YirCMgpgvIgEAUgSkOnX6aiURWm2B9G_L7SMdczUjzNn8zWGbwzfyoask142Cx3o_861QJM1rciVj_r5te1e8j96m__xAb2qbMRNDFI8kZbLVlR_p-c2Wtsb9aQ9o&e=1621354551&r=cc9781cf-59f0-4812-ba14-4dac9d5db060-1&s=AMwTxj9ZM7FboIawnU9hDZkdqNg",
    name: "her birthday",
    lat: 39.95233,
    long: -75.14298,
    tags: ["hipster", "beer", "food", "dating"],
  },
  {
    id: "1hg24266642ghg",
    image: "https://cvws.icloud-content.com/S/AVI28ZZNrIuPQ1bV73dCJ6akOnX6/764697F4-FD42-47EE-8B23-AD8BCD011728.JPG?o=AmtRDHQLxRpkk0mE8h_SmYpj-gRxcxl7wvlX50aAAZsJ&v=1&z=https%3A%2F%2Fp69-content.icloud.com%3A443&x=1&a=CAogWihJ9ERfT8qaOa0mfU5bWiMmtYoD0JGlHeI-GT-CB4ESZRCKmfn8ly8YirCMgpgvIgEAUgSkOnX6aiURWm2B9G_L7SMdczUjzNn8zWGbwzfyoask142Cx3o_861QJM1rciVj_r5te1e8j96m__xAb2qbMRNDFI8kZbLVlR_p-c2Wtsb9aQ9o&e=1621354551&r=cc9781cf-59f0-4812-ba14-4dac9d5db060-1&s=AMwTxj9ZM7FboIawnU9hDZkdqNg",
    name: "her birthday",
    lat: 39.95233,
    long: -75.14298,
    tags: ["hipster", "beer", "food", "dating"],
  },
  {
    id: "1hg2hghg4266642ghg",
    image: "https://cvws.icloud-content.com/S/Aa0mIHG2H9m5J0g-JwjYuXdLTggX/2D364161-5337-44AC-9932-E60F839B434D.JPG?o=AqFtkkVRtXyy5zw814wQvsdkNG9KG0_f05VvVwtGZJpn&v=1&z=https%3A%2F%2Fp69-content.icloud.com%3A443&x=1&a=CAoggRbvMb2b20KQw-5_j0ixSlt9TMMsthowRg1sE64mle0SZRDL6dL9ly8Yy4DmgpgvIgEAUgRLTggXaiXDdgNr5k7EhjQMj38ZNHR1eT0J9exZwJLa3hEXK8NO8YLxzQWuciXvB6SqfwNtdFH3CQEo5iyRyzXOJETFWgS1vuNF0gKfLOUZfHnN&e=1621356019&r=c6782b6e-c675-4519-b96d-383af2b9d55a-8&s=5fWjjZmrew_OwdUEM00bhCK-pmw",
    name: "Chinese Lantern Fest",
    lat: 39.955383,
    long: -75.150363,
    tags: ["festival", "dating"],
  },
  {
    id: "1hg242ghza42ghg",
    image: "https://cvws.icloud-content.com/S/ARjVgjQ4qohyyNENXj9nna5hqWoX/8CFD373D-FD7D-4708-A117-8DD77FB8C661.JPG?o=AlcagBZyMNrhUw_M5OnG1mvBv_TkxzU1hJPQ5nAdYP38&v=1&z=https%3A%2F%2Fp69-content.icloud.com%3A443&x=1&a=CAogN3tAwqizpfW7vIcLysTRvb8KlDGFeYQJgpX-f9Yb88ASZRDEhN79ly8YxJvxgpgvIgEAUgRhqWoXaiUgcY1R7Fe-Wuh8cgEwEtCFGRm6hW4edO0W_SviaeK5n9tD3qL6ciUax1lvEnUG3VQnc5CjU9RLzJwi9DrgiH6sjzFUMATDeMx_f1xR&e=1621356203&r=3f493120-9ed4-428f-8536-63ade22fa8bb-4&s=cjGr4-M0hzkrwBL9B8-1TVKXvIw",
    name: "Coney Island",
    lat: 40.5753099,
    long: -73.956674,
    tags: ["festival", "hipster", "beer"],
  },
  {
    id: "1h6yuuyghg",
    image: "https://cvws.icloud-content.com/S/Ae-aNzh-QoNBLZWMs3tVCSFrPBKP/6FBB3827-21B6-4CF6-9B7E-AB98B1486A1C.JPG?o=AuQgBjbLMvCFc_R-2YoHOh5Kflhmdivqs0lX1V28EZOw&v=1&z=https%3A%2F%2Fp69-content.icloud.com%3A443&x=1&a=CAogtiTnahBqa38UEH7MnVaa9xcNiDj7eMNhkjSn4LgtlY0SZRCd6PL9ly8Ynf-Fg5gvIgEAUgRrPBKPaiVPHiFXh6Av-_e5X4L0DZKcJ_EsPnr4sP2pdeuKsIktYQa_b0bNciVOMfV0_qDXcbgQXrweHJgi3MlJBXZQN72jRztTYy4ynUVT-ODn&e=1621356543&r=7118830f-1229-4f02-abf5-82640d6995c4-7&s=2D6g4umiIlZj5Hu6CgwqBVJxpcQ",
    name: "Toby!!!!!",
    lat: 39.9661768,
    long: -75.1286807,
    comments:"a good dog",
    tags: ["dog"],
  },

];
// end sample array

export const fakeUser = {
  id: "kasdfkjj",
  username: "J Brennan",
  email: "nonya@biz.com",
  usertags: ["hipster", "beer", "food", "dating", "coffee", "home", "festival", "dog"],
  markers: sample,
};

