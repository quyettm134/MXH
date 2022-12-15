import assets from "./assets";

const NFTData = [
  {
    id: "NFT-01",
    name: "Nhà trọ Phương Nam",
    creator: "4 Đường 205A, KP3, Quận 9, Thành phố Hồ Chí Minh",
    price: "400 lượt thích",
    description:
      "Bãi đậu xe hơi và Wi-Fi luôn miễn phí, vì vậy bạn có thể giữ liên lạc và đến và đi tùy thích. Tọa lạc tại một vị trí thuận tiện trong khu vực Phú Nhuận của Thành phố Hồ Chí Minh, khách sạn này đưa bạn đến gần các điểm tham quan và lựa chọn ăn uống thú vị. Đừng rời đi trước khi ghé thăm Bảo tàng Chứng tích Chiến tranh nổi tiếng. Được đánh giá 5 sao, chỗ nghỉ chất lượng cao này cung cấp cho khách quyền sử dụng dịch vụ mát-xa, nhà hàng và trung tâm thể dục ngay trong khuôn viên.",
    image: assets.nft01,
    bids: [
      {
        id: "BID-11",
        name: "Jessica Tan",
        price: "4 / 5",
        image: assets.person02,
        date: "December 12, 2019 at 12:10 PM",
      },
      {
        id: "BID-12",
        name: "Jennifer Sia",
        price: "3 / 5",
        image: assets.person03,
        date: "December 27, 2019 at 1:50 PM",
      },
      {
        id: "BID-13",
        name: "Rosie Wong",
        price: "4.5 / 5",
        image: assets.person04,
        date: "December 31, 2019 at 3:50 PM",
      },
    ],
  },
  {
    id: "NFT-02",
    name: "Nhà trọ Kim Hoàn",
    creator: "đường 21, Khu Phố Nhị Đồng 1, Dĩ An, Bình Dương",
    price: "714 lượt thích",
    description:
      "Bãi đậu xe hơi và Wi-Fi luôn miễn phí, vì vậy bạn có thể giữ liên lạc và đến và đi tùy thích. Tọa lạc tại một vị trí thuận tiện trong khu vực Phú Nhuận của Thành phố Hồ Chí Minh, khách sạn này đưa bạn đến gần các điểm tham quan và lựa chọn ăn uống thú vị. Đừng rời đi trước khi ghé thăm Bảo tàng Chứng tích Chiến tranh nổi tiếng. Được đánh giá 5 sao, chỗ nghỉ chất lượng cao này cung cấp cho khách quyền sử dụng dịch vụ mát-xa, nhà hàng và trung tâm thể dục ngay trong khuôn viên.",
    image: assets.nft02,
    bids: [
      {
        id: "BID-21",
        name: "Jessica Tan",
        price: "4 / 5",
        image: assets.person04,
        date: "December 12, 2019 at 12:10 PM",
      },
    ],
  },
  {
    id: "NFT-03",
    name: "Nhà trọ Trường Vũ",
    creator: "16 Đường N2, khu phố thống nhất 1, Dĩ An, Bình Dương",
    price: "95 lượt thích",
    description:
      "Bãi đậu xe hơi và Wi-Fi luôn miễn phí, vì vậy bạn có thể giữ liên lạc và đến và đi tùy thích. Tọa lạc tại một vị trí thuận tiện trong khu vực Phú Nhuận của Thành phố Hồ Chí Minh, khách sạn này đưa bạn đến gần các điểm tham quan và lựa chọn ăn uống thú vị. Đừng rời đi trước khi ghé thăm Bảo tàng Chứng tích Chiến tranh nổi tiếng. Được đánh giá 5 sao, chỗ nghỉ chất lượng cao này cung cấp cho khách quyền sử dụng dịch vụ mát-xa, nhà hàng và trung tâm thể dục ngay trong khuôn viên.",
    image: assets.nft03,
    bids: [
      {
        id: "BID-31",
        name: "Jessica Tan",
        price: "4 / 5",
        image: assets.person02,
        date: "December 12, 2019 at 12:10 PM",
      },
      {
        id: "BID-32",
        name: "Jennifer Sia",
        price: "4 / 5",
        image: assets.person03,
        date: "December 27, 2019 at 1:50 PM",
      },
    ],
  },
  {
    id: "NFT-04",
    name: "Nhà trọ Hoàng Anh",
    creator: "5 Trương Định, Phường Bến Thành, Quận 1, Thành phố Hồ Chí Minh",
    price: "54 lượt thích",
    description:
      "Bãi đậu xe hơi và Wi-Fi luôn miễn phí, vì vậy bạn có thể giữ liên lạc và đến và đi tùy thích. Tọa lạc tại một vị trí thuận tiện trong khu vực Phú Nhuận của Thành phố Hồ Chí Minh, khách sạn này đưa bạn đến gần các điểm tham quan và lựa chọn ăn uống thú vị. Đừng rời đi trước khi ghé thăm Bảo tàng Chứng tích Chiến tranh nổi tiếng. Được đánh giá 5 sao, chỗ nghỉ chất lượng cao này cung cấp cho khách quyền sử dụng dịch vụ mát-xa, nhà hàng và trung tâm thể dục ngay trong khuôn viên.",
    image: assets.nft04,
    bids: [
      {
        id: "BID-41",
        name: "Jessica Tan",
        price: "4 / 5",
        image: assets.person02,
        date: "December 12, 2019 at 12:10 PM",
      },
      {
        id: "BID-42",
        name: "Jennifer Sia",
        price: "4 / 5",
        image: assets.person03,
        date: "December 27, 2019 at 1:50 PM",
      },
      {
        id: "BID-43",
        name: "Rosie Wong",
        price: "4 / 5",
        image: assets.person04,
        date: "December 31, 2019 at 3:50 PM",
      },
      {
        id: "BID-44",
        name: "Vincent Swift",
        price: "4 / 5",
        image: assets.person02,
        date: "December 31, 2019 at 3:50 PM",
      },
    ],
  },
  {
    id: "NFT-05",
    name: "Nhà trọ Hoàng Dung",
    creator: "53 Hai Bà Trưng, Đông Hoà, Dĩ An, Bình Dương",
    price: "862 lượt thích",
    description:
      "Bãi đậu xe hơi và Wi-Fi luôn miễn phí, vì vậy bạn có thể giữ liên lạc và đến và đi tùy thích. Tọa lạc tại một vị trí thuận tiện trong khu vực Phú Nhuận của Thành phố Hồ Chí Minh, khách sạn này đưa bạn đến gần các điểm tham quan và lựa chọn ăn uống thú vị. Đừng rời đi trước khi ghé thăm Bảo tàng Chứng tích Chiến tranh nổi tiếng. Được đánh giá 5 sao, chỗ nghỉ chất lượng cao này cung cấp cho khách quyền sử dụng dịch vụ mát-xa, nhà hàng và trung tâm thể dục ngay trong khuôn viên.",
    image: assets.nft05,
    bids: [
      {
        id: "BID-51",
        name: "Jessica Tan",
        price: "4 / 5",
        image: assets.person02,
        date: "December 12, 2019 at 12:10 PM",
      },
    ],
  },
  {
    id: "NFT-06",
    name: "Nhà trọ Ánh Dương",
    creator: "42-44 Thủ Khoa Huân, Phường Bến Thành, Quận 1, Thành phố Hồ Chí Minh",
    price: "200 lượt thích",
    description:
      "Bãi đậu xe hơi và Wi-Fi luôn miễn phí, vì vậy bạn có thể giữ liên lạc và đến và đi tùy thích. Tọa lạc tại một vị trí thuận tiện trong khu vực Phú Nhuận của Thành phố Hồ Chí Minh, khách sạn này đưa bạn đến gần các điểm tham quan và lựa chọn ăn uống thú vị. Đừng rời đi trước khi ghé thăm Bảo tàng Chứng tích Chiến tranh nổi tiếng. Được đánh giá 5 sao, chỗ nghỉ chất lượng cao này cung cấp cho khách quyền sử dụng dịch vụ mát-xa, nhà hàng và trung tâm thể dục ngay trong khuôn viên.",
    image: assets.nft06,
    bids: [
      {
        id: "BID-61",
        name: "Jessica Tan",
        price: "4 / 5",
        image: assets.person02,
        date: "December 12, 2019 at 12:10 PM",
      },
      {
        id: "BID-62",
        name: "Jennifer Sia",
        price: "4 / 5",
        image: assets.person03,
        date: "December 27, 2019 at 1:50 PM",
      },
      {
        id: "BID-63",
        name: "Rosie Wong",
        price: "4 / 5",
        image: assets.person04,
        date: "December 31, 2019 at 3:50 PM",
      },
      {
        id: "BID-64",
        name: "Siti Nurhaliza",
        price: "4 / 5",
        image: assets.person02,
        date: "December 31, 2019 at 3:50 PM",
      },
      {
        id: "BID-65",
        name: "Kaitlyn Lee",
        price: "4 / 5",
        image: assets.person02,
        date: "December 31, 2019 at 3:50 PM",
      },
    ],
  },
  {
    id: "NFT-07",
    name: "Nhà trọ Lộc Thiên",
    creator: "280 Đ. Nam Kỳ Khởi Nghĩa, Phường 8, Quận 3, Thành phố Hồ Chí Minh",
    price: "18 lượt thích",
    description:
      "Bãi đậu xe hơi và Wi-Fi luôn miễn phí, vì vậy bạn có thể giữ liên lạc và đến và đi tùy thích. Tọa lạc tại một vị trí thuận tiện trong khu vực Phú Nhuận của Thành phố Hồ Chí Minh, khách sạn này đưa bạn đến gần các điểm tham quan và lựa chọn ăn uống thú vị. Đừng rời đi trước khi ghé thăm Bảo tàng Chứng tích Chiến tranh nổi tiếng. Được đánh giá 5 sao, chỗ nghỉ chất lượng cao này cung cấp cho khách quyền sử dụng dịch vụ mát-xa, nhà hàng và trung tâm thể dục ngay trong khuôn viên.",
    image: assets.nft07,
    bids: [],
  },
];

export { NFTData };
