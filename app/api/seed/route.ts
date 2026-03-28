import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Place from "@/models/Place";
import Blog from "@/models/Blog";

export async function GET() {
  try {
    await connectDB();

    await Place.deleteMany({});
    await Blog.deleteMany({});

    const places = [
      {
        name: "Tirumala Venkateswara Temple",
        slug: "tirumala-venkateswara-temple",
        location: "Tirumala, Tirupati",
        image: "https://images.unsplash.com/photo-1565073624494-2a11d9b5b8e1?w=800&q=80",
        images: [
          "https://images.unsplash.com/photo-1565073624494-2a11d9b5b8e1?w=800&q=80",
          "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=800&q=80",
          "https://images.unsplash.com/photo-1589979481223-deb893041524?w=800&q=80"
        ],
        description: "One of the richest and most visited pilgrimage centers in the world, dedicated to Lord Venkateswara. Over 50,000 devotees visit daily.",
        history: "The temple is believed to be over 3000 years old, managed by Tirumala Tirupati Devasthanams (TTD). Lord Venkateswara is believed to have appeared to save humanity from Kali Yuga.",
        timings: "5:00 AM - 9:00 PM (Special darshan timings vary)",
        entryFee: "Free (Special darshan: ₹300 - ₹5000)",
        bestTime: "September - March",
        category: "Temple"
      },
      {
        name: "Sri Padmavathi Ammavari Temple",
        slug: "padmavathi-ammavari-temple",
        location: "Tiruchanur, Tirupati",
        image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=800&q=80",
        images: [
          "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=800&q=80",
          "https://images.unsplash.com/photo-1565073624494-2a11d9b5b8e1?w=800&q=80"
        ],
        description: "Beautiful temple dedicated to Goddess Padmavathi (Lakshmi), wife of Lord Venkateswara. Located 5km from Tirupati.",
        history: "Built by King Krishnadevaraya in 16th century. It is believed that Lord Venkateswara married Goddess Padmavathi at this location.",
        timings: "6:00 AM - 12:00 PM, 3:00 PM - 8:00 PM",
        entryFee: "Free",
        bestTime: "October - March",
        category: "Temple"
      },
      {
        name: "Govindaraja Swamy Temple",
        slug: "govindaraja-swamy-temple",
        location: "Tirupati",
        image: "https://images.unsplash.com/photo-1589979481223-deb893041524?w=800&q=80",
        images: [
          "https://images.unsplash.com/photo-1589979481223-deb893041524?w=800&q=80",
          "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=800&q=80"
        ],
        description: "Ancient temple dedicated to Lord Govindaraja (Vishnu), located just 1.5km from Tirupati bus stand. Known for its beautiful architecture.",
        history: "Built by the Chola kings around 12th century CE. One of the oldest temples in Tirupati.",
        timings: "6:00 AM - 12:00 PM, 3:00 PM - 8:00 PM",
        entryFee: "Free",
        bestTime: "October - March",
        category: "Temple"
      },
      {
        name: "Kapila Theertham",
        slug: "kapila-theertham",
        location: "Tirupati",
        image: "https://images.unsplash.com/photo-1546587348-d12660c30c50?w=800&q=80",
        images: [
          "https://images.unsplash.com/photo-1546587348-d12660c30c50?w=800&q=80",
          "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?w=800&q=80"
        ],
        description: "Sacred waterfall and temple dedicated to Lord Shiva. Located 3km from Tirupati, known for its natural beauty and spiritual significance.",
        history: "Named after sage Kapila, who is believed to have meditated here. The waterfall originates from seshachalam hills.",
        timings: "6:00 AM - 6:00 PM",
        entryFee: "Free",
        bestTime: "July - November",
        category: "Theertham"
      },
      {
        name: "ISKCON Tirupati",
        slug: "iskcon-tirupati",
        location: "Tirupati",
        image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=800&q=80",
        images: [
          "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=800&q=80",
          "https://images.unsplash.com/photo-1565073624494-2a11d9b5b8e1?w=800&q=80"
        ],
        description: "Peaceful Hare Krishna temple with beautiful architecture and serene ambience. Known for Krishna Bhajans and divine atmosphere.",
        history: "Established by ISKCON founder Prabhupada. Popular among international and domestic tourists.",
        timings: "7:00 AM - 1:00 PM, 4:00 PM - 8:30 PM",
        entryFee: "Free",
        bestTime: "October - March",
        category: "Temple"
      },
      {
        name: "Sri Varahaswami Temple",
        slug: "varahaswami-temple",
        location: "Tirumala, Tirupati",
        image: "https://images.unsplash.com/photo-1565073624494-2a11d9b5b8e1?w=800&q=80",
        images: [
          "https://images.unsplash.com/photo-1565073624494-2a11d9b5b8e1?w=800&q=80"
        ],
        description: "Ancient temple dedicated to Lord Varaha (boar incarnation of Vishnu). Must visit before entering Venkateswara Temple.",
        history: "Believed to be established by Lord Venkateswara himself. Mentioned in ancient scriptures.",
        timings: "6:00 AM - 8:00 PM",
        entryFee: "Free",
        bestTime: "October - March",
        category: "Temple"
      },
      {
        name: "Sri Bedi Anjaneya Swamy Temple",
        slug: "bedi-anjaneya-temple",
        location: "Tirumala, Tirupati",
        image: "https://images.unsplash.com/photo-1565058688721-72f43c5e4c92?w=800&q=80",
        images: [
          "https://images.unsplash.com/photo-1565058688721-72f43c5e4c92?w=800&q=80"
        ],
        description: "Famous Hanuman temple located opposite the main Tirumala temple gate. Known for fulfilling devotees' wishes.",
        history: "Built during the time of Sri Ramanujacharya. Popular among pilgrims for quick darshan.",
        timings: "6:00 AM - 9:00 PM",
        entryFee: "Free",
        bestTime: "October - March",
        category: "Temple"
      },
      {
        name: "Talakona Waterfall",
        slug: "talakona-waterfall",
        location: "Talakona, Kadapa",
        image: "https://images.unsplash.com/photo-1546587348-d12660c30c50?w=800&q=80",
        images: [
          "https://images.unsplash.com/photo-1546587348-d12660c30c50?w=800&q=80",
          "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?w=800&q=80",
          "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80"
        ],
        description: "Highest waterfall in Andhra Pradesh at 270 feet. Located in Seshachalam hills with pristine natural beauty and dense forests.",
        history: "Located in the Seshachalam hills, part of the Eastern Ghats. Named after the village Talakona.",
        timings: "6:00 AM - 6:00 PM",
        entryFee: "₹20 per person (Vehicle entry: ₹50)",
        bestTime: "August - November",
        category: "Waterfall"
      },
      {
        name: "Chandragiri Fort",
        slug: "chandragiri-fort",
        location: "Chandragiri, Tirupati",
        image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=800&q=80",
        images: [
          "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=800&q=80",
          "https://images.unsplash.com/photo-1565073624494-2a11d9b5b8e1?w=800&q=80"
        ],
        description: "Historical fort built in 11th century, capital of Vijayanagara Empire. Offers panoramic views of the surrounding hills.",
        history: "Built by the Chola dynasty, later became the capital of Sri Krishnadevaraya of Vijayanagara Empire.",
        timings: "9:00 AM - 5:00 PM",
        entryFee: "₹25 (Indians), ₹300 (Foreigners)",
        bestTime: "October - March",
        category: "Historical"
      },
      {
        name: "Chandragiri Palace & Museum",
        slug: "chandragiri-palace-museum",
        location: "Chandragiri, Tirupati",
        image: "https://images.unsplash.com/photo-1526907157318-996a9ce49e5e?w=800&q=80",
        images: [
          "https://images.unsplash.com/photo-1526907157318-996a9ce49e5e?w=800&q=80",
          "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=800&q=80"
        ],
        description: "Royal palace with artifacts from Vijayanagara empire. Displays ancient weapons, costumes, and royal belongings.",
        history: "Built in 16th century as residence for Vijayanagara kings. Now maintained as a heritage museum.",
        timings: "9:00 AM - 5:00 PM (Closed on Fridays)",
        entryFee: "₹25 (Indians), ₹300 (Foreigners)",
        bestTime: "October - March",
        category: "Historical"
      },
      {
        name: "Deer Park",
        slug: "deer-park-tirumala",
        location: "Tirumala, Tirupati",
        image: "https://images.unsplash.com/photo-1484406566174-9da000fda645?w=800&q=80",
        images: [
          "https://images.unsplash.com/photo-1484406566174-9da000fda645?w=800&q=80",
          "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=800&q=80"
        ],
        description: "Beautiful park on Tirumala hill with deer and scenic views of the valley. Great for nature lovers and families.",
        history: "Established as a wildlife sanctuary within the TTD estate. Home to spotted deer and other wildlife.",
        timings: "6:00 AM - 6:00 PM",
        entryFee: "₹10 per person",
        bestTime: "October - March",
        category: "Nature"
      },
      {
        name: "Silathoranam (Natural Arch)",
        slug: "silathoranam-natural-arch",
        location: "Tirumala, Tirupati",
        image: "https://images.unsplash.com/photo-1590054019677-3d2b1e83d4d8?w=800&q=80",
        images: [
          "https://images.unsplash.com/photo-1590054019677-3d2b1e83d4d8?w=800&q=80",
          "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&q=80"
        ],
        description: "Natural rock formation in the shape of an arch, considered a geological marvel. Famous photo spot on Tirumala hills.",
        history: "Natural formation over millions of years. Mentioned in ancient scriptures as a sacred site.",
        timings: "6:00 AM - 8:00 PM",
        entryFee: "Free (included in temple entry)",
        bestTime: "October - February",
        category: "Nature"
      },
      {
        name: "Sri Venkateswara Zoological Park",
        slug: "sri-venkateswara-zoological-park",
        location: "Tirupati",
        image: "https://images.unsplash.com/photo-1557351245-0d3af6f6592f?w=800&q=80",
        images: [
          "https://images.unsplash.com/photo-1557351245-0d3af6f6592f?w=800&q=80",
          "https://images.unsplash.com/photo-1484406566174-9da000fda645?w=800&q=80"
        ],
        description: "One of the largest zoos in Asia, housing over 1500 animals of 100+ species. Great for families and wildlife enthusiasts.",
        history: "Established in 1986 as a conservation center. Spread over 5500 acres.",
        timings: "8:00 AM - 5:30 PM (Closed on Mondays)",
        entryFee: "Adults: ₹30, Children: ₹15",
        bestTime: "November - February",
        category: "Park"
      },
      {
        name: "Regional Science Centre",
        slug: "regional-science-centre-tirupati",
        location: "Tirupati",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
        images: [
          "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
          "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&q=80"
        ],
        description: "Interactive science museum with hands-on exhibits, planetarium, and fun learning activities for kids.",
        history: "Established by National Council of Science Museums. Popular educational destination.",
        timings: "10:00 AM - 5:30 PM (Closed on Mondays)",
        entryFee: "₹40 adults, ₹20 children",
        bestTime: "October - March",
        category: "Park"
      },
      {
        name: "Sri Kalahasti Temple",
        slug: "sri-kalahasti-temple",
        location: "Srikalahasti, Chittoor",
        image: "https://images.unsplash.com/photo-1589979481223-deb893041524?w=800&q=80",
        images: [
          "https://images.unsplash.com/photo-1589979481223-deb893041524?w=800&q=80",
          "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=800&q=80"
        ],
        description: "Famous temple dedicated to Lord Shiva, known for Rahu-Ketu dosha puja. One of the most important Shiva temples in South India.",
        history: "Built during the Pallava period in 12th century CE. Known for the story of Shiva's manifestation.",
        timings: "6:00 AM - 8:30 PM",
        entryFee: "Free",
        bestTime: "October - February",
        category: "Temple"
      },
      {
        name: "Kanipakam Vinayaka Temple",
        slug: "kanipakam-vinayaka-temple",
        location: "Kanipakam, Chittoor",
        image: "https://images.unsplash.com/photo-1565058688721-72f43c5e4c92?w=800&q=80",
        images: [
          "https://images.unsplash.com/photo-1565058688721-72f43c5e4c92?w=800&q=80"
        ],
        description: "Self-manifested (swayambhu) idol of Lord Ganesha. Very popular for removing obstacles and granting wishes.",
        history: "The idol is said to have appeared on its own from the earth. The temple dates back to 11th century.",
        timings: "6:00 AM - 8:00 PM",
        entryFee: "Free",
        bestTime: "October - March",
        category: "Temple"
      },
      {
        name: "Akasaganga Waterfalls",
        slug: "akasaganga-waterfalls",
        location: "Tirumala, Tirupati",
        image: "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?w=800&q=80",
        images: [
          "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?w=800&q=80",
          "https://images.unsplash.com/photo-1546587348-d12660c30c50?w=800&q=80"
        ],
        description: "Holy waterfall on Tirumala hills where water flows through the deity idol. Sacred for devotees.",
        history: "Believed to have been created by Lord Rama. Devotees take a dip to cleanse sins.",
        timings: "6:00 AM - 6:00 PM",
        entryFee: "Free",
        bestTime: "July - November",
        category: "Waterfall"
      },
      {
        name: "Kaigal Waterfall",
        slug: "kaigal-waterfall",
        location: "Kaigal, Chittoor",
        image: "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?w=800&q=80",
        images: [
          "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?w=800&q=80",
          "https://images.unsplash.com/photo-1546587348-d12660c30c50?w=800&q=80"
        ],
        description: "Spectacular waterfall also known as Kailasanatha falls, surrounded by lush greenery and rocky terrain.",
        history: "Named after the village Kaigal and the presiding deity Kailasanatha.",
        timings: "6:00 AM - 6:00 PM",
        entryFee: "₹30 per person",
        bestTime: "October - January",
        category: "Waterfall"
      },
      {
        name: "Kailasakona Waterfalls",
        slug: "kailasakona-waterfalls",
        location: "Kailasakona, Chittoor",
        image: "https://images.unsplash.com/photo-1546587348-d12660c30c50?w=800&q=80",
        images: [
          "https://images.unsplash.com/photo-1546587348-d12660c30c50?w=800&q=80",
          "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80"
        ],
        description: "Refreshing waterfall with Shiva shrine. Located 44km from Tirupati, surrounded by natural beauty.",
        history: "Named after Lord Shiva (Kailasa). The waterfall originates from a cave.",
        timings: "6:00 AM - 6:00 PM",
        entryFee: "₹20 per person",
        bestTime: "August - November",
        category: "Waterfall"
      },
      {
        name: "Papavinasanam",
        slug: "papavinasanam",
        location: "Tirumala, Tirupati",
        image: "https://images.unsplash.com/photo-1546587348-d12660c30c50?w=800&q=80",
        images: [
          "https://images.unsplash.com/photo-1546587348-d12660c30c30c50?w=800&q=80"
        ],
        description: "Sacred water body on Tirumala hills believed to cleanse all sins. Important pilgrimage site.",
        history: "According to legend, taking a dip here washes away all past sins (papam).",
        timings: "6:00 AM - 8:00 PM",
        entryFee: "Free",
        bestTime: "October - March",
        category: "Theertham"
      },
      {
        name: "Sri Kalyana Venkateswara Swamy Temple",
        slug: "sri-kalyana-venkateswara-temple",
        location: "Srinivasa Mangapuram, Tirupati",
        image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=800&q=80",
        images: [
          "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=800&q=80"
        ],
        description: "Temple where Lord Venkateswara is believed to have stayed after marrying Goddess Padmavathi.",
        history: "Built by Sri Krishna Devaraya in 16th century. Very important for newlyweds.",
        timings: "6:00 AM - 12:00 PM, 3:00 PM - 8:00 PM",
        entryFee: "Free",
        bestTime: "October - March",
        category: "Temple"
      },
      {
        name: "Sri Veda Narayanaswami Temple",
        slug: "nagalapuram-temple",
        location: "Nagalapuram, Chittoor",
        image: "https://images.unsplash.com/photo-1565073624494-2a11d9b5b8e1?w=800&q=80",
        images: [
          "https://images.unsplash.com/photo-1565073624494-2a11d9b5b8e1?w=800&q=80"
        ],
        description: "Ancient temple known for unique Surya Puja phenomenon where sunlight passes through the sanctum.",
        history: "Built by Pandyas in 12th century. Famous for the annual Surya puja during equinox.",
        timings: "6:00 AM - 12:00 PM, 3:00 PM - 8:00 PM",
        entryFee: "Free",
        bestTime: "October - March",
        category: "Temple"
      },
      {
        name: "Yoga Narasimha Swamy Temple",
        slug: "yoga-narasimha-temple",
        location: "Tirumala, Tirupati",
        image: "https://images.unsplash.com/photo-1565058688721-72f43c5e4c92?w=800&q=80",
        images: [
          "https://images.unsplash.com/photo-1565058688721-72f43c5e4c92?w=800&q=80"
        ],
        description: "Peaceful temple dedicated to Narasimha (lion-man avatar of Vishnu) in the hills. Great for meditation.",
        history: "Ancient temple in the hills. Known for its tranquil environment and spiritual significance.",
        timings: "6:00 AM - 7:00 PM",
        entryFee: "Free",
        bestTime: "October - February",
        category: "Temple"
      },
      {
        name: "Parasareswara Temple",
        slug: "parasareswara-temple-gudimallam",
        location: "Gudimallam, Tirupati",
        image: "https://images.unsplash.com/photo-1589979481223-deb893041524?w=800&q=80",
        images: [
          "https://images.unsplash.com/photo-1589979481223-deb893041524?w=800&q=80"
        ],
        description: "Temple housing the oldest Shiva Lingam in India, dating back to 2nd century BCE.",
        history: "One of the oldest Shiva temples in India. The lingam has unique carving of Shiva's face.",
        timings: "6:00 AM - 6:00 PM",
        entryFee: "Free",
        bestTime: "October - March",
        category: "Temple"
      },
      {
        name: "Horsley Hills",
        slug: "horsley-hills",
        location: "Horsley Hills, Kadapa",
        image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&q=80",
        images: [
          "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&q=80",
          "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80"
        ],
        description: "Beautiful hill station 130km from Tirupati. Known for its pleasant climate and scenic views. Popular summer retreat.",
        history: "Named after British collector Mr. Horsley. Developed as a summer getaway during British rule.",
        timings: "Open 24 hours",
        entryFee: "Free (activities extra)",
        bestTime: "March - June",
        category: "Nature"
      },
      {
        name: "Sri Venkateswara National Park",
        slug: "sri-venkateswara-national-park",
        location: "Tirupati",
        image: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=800&q=80",
        images: [
          "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=800&q=80"
        ],
        description: "Rich biodiversity park with rare plant species, trekking trails, and wildlife. Part of Eastern Ghats.",
        history: "Established as a national park in 1989. Home to many endangered species.",
        timings: "6:00 AM - 6:00 PM",
        entryFee: "₹20 per person",
        bestTime: "October - March",
        category: "Nature"
      },
      {
        name: "Garuda Rock Viewpoint",
        slug: "garuda-rock-viewpoint",
        location: "Tirumala, Tirupati",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
        images: [
          "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80"
        ],
        description: "Scenic viewpoint near Silathoranam offering breathtaking views of the valley. Popular photo spot.",
        history: "Named after the mythical eagle Garuda. Offers panoramic views of Tirumala hills.",
        timings: "6:00 AM - 8:00 PM",
        entryFee: "Free",
        bestTime: "October - February",
        category: "Nature"
      },
      {
        name: "Tumbhuru Theertham",
        slug: "tumbhuru-theertham",
        location: "Papavinasam, Tirupati",
        image: "https://images.unsplash.com/photo-1546587348-d12660c30c50?w=800&q=80",
        images: [
          "https://images.unsplash.com/photo-1546587348-d12660c30c50?w=800&q=80"
        ],
        description: "Trekking adventure spot with sacred water body. Located 12km from Papavinasam through dense forest.",
        history: "Named after sage Tumburu. Considered a sacred meditation spot.",
        timings: "6:00 AM - 6:00 PM",
        entryFee: "Free",
        bestTime: "October - March",
        category: "Theertham"
      },
      {
        name: "Gogarbham Theertham",
        slug: "gogarbham-theertham",
        location: "Tirumala, Tirupati",
        image: "https://images.unsplash.com/photo-1546587348-d12660c30c50?w=800&q=80",
        images: [
          "https://images.unsplash.com/photo-1546587348-d12660c30c50?w=800&q=80"
        ],
        description: "Sacred cave water source on Tirumala hills. Known for its therapeutic properties.",
        history: "Ancient sacred site mentioned in Puranas. Devotees believe the water has healing powers.",
        timings: "6:00 AM - 6:00 PM",
        entryFee: "Free",
        bestTime: "October - March",
        category: "Theertham"
      },
      {
        name: "Japali Theertham",
        slug: "japali-theertham",
        location: "Tirumala, Tirupati",
        image: "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?w=800&q=80",
        images: [
          "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?w=800&q=80"
        ],
        description: "Serene theertham located amidst dense forest on Tirumala hills. Perfect for meditation.",
        history: "Associated with sage Japali. Ancient meditation site.",
        timings: "6:00 AM - 6:00 PM",
        entryFee: "Free",
        bestTime: "October - March",
        category: "Theertham"
      },
      {
        name: "Japaladakshi Cave Temple",
        slug: "japaladakshi-cave-temple",
        location: "Alipiri, Tirupati",
        image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=800&q=80",
        images: [
          "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=800&q=80"
        ],
        description: "Sacred cave temple near Alipiri. Known for meditation and spiritual peace.",
        history: "Ancient cave temple with significant religious importance.",
        timings: "6:00 AM - 6:00 PM",
        entryFee: "Free",
        bestTime: "October - March",
        category: "Temple"
      },
      {
        name: "Sri Venkateswara Museum",
        slug: "sri-venkateswara-museum-tirumala",
        location: "Tirumala, Tirupati",
        image: "https://images.unsplash.com/photo-1526907157318-996a9ce49e5e?w=800&q=80",
        images: [
          "https://images.unsplash.com/photo-1526907157318-996a9ce49e5e?w=800&q=80"
        ],
        description: "Museum inside Tirumala with ancient sculptures, temple artifacts, and historical items.",
        history: "Maintained by TTD. Houses rare antiques from the temple's long history.",
        timings: "10:00 AM - 1:00 PM, 2:00 PM - 5:00 PM",
        entryFee: "₹10",
        bestTime: "October - March",
        category: "Historical"
      },
      {
        name: "Narayanavanam Temple",
        slug: "narayanavanam-temple",
        location: "Narayanavanam, Tirupati",
        image: "https://images.unsplash.com/photo-1565073624494-2a11d9b5b8e1?w=800&q=80",
        images: [
          "https://images.unsplash.com/photo-1565073624494-2a11d9b5b8e1?w=800&q=80"
        ],
        description: "Temple at the marriage site of Lord Venkateswara and Goddess Padmavathi. 45km from Tirupati.",
        history: "Believed to be the exact location where the divine marriage took place.",
        timings: "6:00 AM - 12:00 PM, 3:00 PM - 8:00 PM",
        entryFee: "Free",
        bestTime: "October - March",
        category: "Temple"
      },
      {
        name: "Surutapalli Temple",
        slug: "surutapalli-temple",
        location: "Surutapalli, Chittoor",
        image: "https://images.unsplash.com/photo-1589979481223-deb893041524?w=800&q=80",
        images: [
          "https://images.unsplash.com/photo-1589979481223-deb893041524?w=800&q=80"
        ],
        description: "Famous for the sleeping Shiva (Swayambhu Linga) in Linga form. Rare phenomenon.",
        history: "Ancient temple with self-manifested lingam in sleeping posture.",
        timings: "6:00 AM - 12:00 PM, 3:00 PM - 8:00 PM",
        entryFee: "Free",
        bestTime: "October - March",
        category: "Temple"
      },
      {
        name: "Tirupati Railway Station",
        slug: "tirupati-railway-station",
        location: "Tirupati",
        image: "https://images.unsplash.com/photo-1526907157318-996a9ce49e5e?w=800&q=80",
        images: [
          "https://images.unsplash.com/photo-1526907157318-996a9ce49e5e?w=800&q=80"
        ],
        description: "One of the busiest railway stations in South India. Well-connected to major cities with beautiful architecture.",
        history: "Established in 1877 by Madras Railway. Recently renovated with modern facilities.",
        timings: "24 hours",
        entryFee: "Free",
        bestTime: "October - March",
        category: "Historical"
      },
      {
        name: "Tirupati Handicrafts Emporium",
        slug: "tirupati-handicrafts-emporium",
        location: "Tirupati",
        image: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=800&q=80",
        images: [
          "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=800&q=80"
        ],
        description: "Famous for local wooden toys, brass items, and temple souvenirs. Great for buying authentic Tirupati handicrafts.",
        history: "Government-run emporium promoting local artisans and traditional crafts.",
        timings: "10:00 AM - 8:00 PM",
        entryFee: "Free",
        bestTime: "October - March",
        category: "Shopping"
      }
    ];

    const blogs = [
      {
        title: "Complete Guide to Tirumala Darshan 2026",
        slug: "complete-guide-tirumala-darshan-2026",
        image: "https://images.unsplash.com/photo-1565073624494-2a11d9b5b8e1?w=800&q=80",
        images: [
          "https://images.unsplash.com/photo-1565073624494-2a11d9b5b8e1?w=800&q=80",
          "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=800&q=80"
        ],
        description: "Everything you need to know about visiting Tirumala temple in 2026 - from entry passes to special darshan, tips and timing.",
        content: `Planning a visit to Tirumala Venkateswara Temple? Here's your complete guide for 2026.

**Types of Darshan:**
1. **Free Darshan (Sarvadarshanam)** - Queue wait time: 2-6 hours
2. **Special Entry Darshan (₹300)** - Faster entry through separate queue
3. **VIP Darshan (₹500-5000)** - Very fast entry with closer darshan
4. **Archana (₹50)** - Special puja with priest

**How to Book:**
- Book online at https://ttdsevaonline.com
- Download the TTD app for easy booking
- Offline booking at TTD booking centres

**Tips for 2026:**
- Book at least 2-3 months in advance for weekends
- Arrive early morning (before 5 AM) for shorter queues
- Carry water and snacks for the wait
- Wear modest traditional clothing
- Don't carry valuables or heavy bags
- Avoid full moon days (Purnima) as it's extremely crowded

**Best Time to Visit:**
- Weekdays are less crowded
- Avoid weekends and festival days
- October to March is the best season
- Brahmotsavam (September-October) is very crowded but grand

**What to Expect:**
- Security check at entry points
- Mobile phones not allowed inside temple
- Digital lockers available at entrance
- Free laddu prasadam after darshan`
      },
      {
        title: "Top 10 Waterfalls Near Tirupati - Complete Guide",
        slug: "top-waterfalls-near-tirupati",
        image: "https://images.unsplash.com/photo-1546587348-d12660c30c50?w=800&q=80",
        images: [
          "https://images.unsplash.com/photo-1546587348-d12660c30c50?w=800&q=80",
          "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?w=800&q=80"
        ],
        description: "Discover the most beautiful waterfalls within 150km of Tirupati city. Complete travel guide with distances and tips.",
        content: `Tirupati and its surrounding areas are blessed with stunning waterfalls. Here's your complete guide:

**Top 10 Waterfalls:**

1. **Talakona Waterfall** (58km)
   - Highest waterfall in AP at 270 feet
   - Entry: ₹20, Open: 6AM-6PM
   - Best: August-November

2. **Kaigal Waterfall** (45km)
   - Also known as Kailasanatha Falls
   - Entry: ₹30, Best: Oct-Jan

3. **Akasaganga Waterfalls** (23km)
   - Holy waterfall on Tirumala hills
   - Free entry, Best: July-Nov

4. **Kailasakona Waterfalls** (44km)
   - Waterfall with Shiva shrine
   - Entry: ₹20, Best: Aug-Nov

5. **Tumbhuru Theertham** (Trek)
   - 12km trek from Papavinasam
   - Adventure + spirituality
   - Best: Oct-March

6. **Gogarbham Theertham** (25km)
   - Sacred cave water source
   - Known for healing properties
   - Best: Oct-March

7. **Japali Theertham** (25km)
   - Forest theertham
   - Great for meditation
   - Best: Oct-March

8. **Borra Caves Waterfall** (100km)
   - Near Araku Valley
   - Cave + waterfall combo

9. **Kumaradhara Waterfall** (150km)
   - Near Sringeri
   - Scenic location

10. **Maghadi Falls** (30km)
    - Great for quick visits

**Travel Tips:**
- Best visited during monsoon (July-Nov)
- Carry comfortable hiking shoes
- Pack food and water
- Start early morning
- Check weather before visiting`
      },
      {
        title: "Tirumala Temple History & Significance",
        slug: "tirumala-temple-history-significance",
        image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=800&q=80",
        images: [
          "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=800&q=80",
          "https://images.unsplash.com/photo-1565073624494-2a11d9b5b8e1?w=800&q=80"
        ],
        description: "Explore the rich 3000-year history and spiritual significance of the world's most visited temple.",
        content: `Tirumala Venkateswara Temple is one of the most visited religious sites in the world.

**History:**
- Temple dates back to 300 CE (over 1700 years)
- Lord Venkateswara appeared to save humanity from Kali Yuga
- Expanded by Cholas, Pandyas, and Vijayanagara kings
- Currently managed by TTD (Tirumala Tirupati Devasthanams)

**Significance:**
- Also known as Balaji and Govinda
- Over 50,000 devotees visit daily
- Annual revenue exceeds ₹1,000 Crore
- One of the richest temples in the world

**Temple Architecture:**
- Dravidian style architecture
- Seven concentric prakarams (walls)
- Gopurams with intricate carvings
- Golden vimana (tower over sanctum)

**Interesting Facts:**
- Over 1500 gold ornaments on the deity
- Hair offering tradition (tonsure) brings prosperity
- Famous Laddu prasadam distributed worldwide
- Temple has its own gold mine (Tirumala hills)

**Festivals:**
- Brahmotsavam (Sep-Oct) - 9 days grand celebration
- Vasanthotsavam (April-May)
- Rathasaptham (Jan-Feb)
- Vaikuntha Ekadasi (Dec-Jan)`
      },
      {
        title: "Best Places to Eat in Tirupati - Food Guide",
        slug: "best-places-to-eat-tirupati",
        image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80",
        images: [
          "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80",
          "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80"
        ],
        description: "From local South Indian delicacies to international cuisine - find the best food spots in Tirupati.",
        content: `Tirupati offers amazing culinary experiences beyond temples!

**Top Restaurants:**

1. **Madhur Vihar** - Multi-cuisine, family-friendly
2. **Bhimas** - Famous for authentic Andhra thali
3. **Kamat Hotel** - Budget-friendly South Indian
4. **Taj Hotel** - Fine dining, North Indian specialties
5. **Sri Kalahasti** - Local vegetarian favorites
6. **Hotel Annapurna** - Traditional South Indian

**Must-Try Dishes:**
- **Pulihara** - Tamarind rice
- **Chakkera Pongali** - Sweet rice with jaggery
- **Dosa & Idli** - With varied chutneys
- **Andhra Thali** - Complete meal with rice, dal, curries
- **Pesarattu** - Green gram crepes
- **Laddu** - Temple prasadam (famous worldwide)

**Food Tips:**
- Most restaurants near temple are vegetarian
- TTD canteens offer affordable prasadam
- Try local street food at Tilak Road
- Hotel breakfast is popular everywhere
- Coffee/tea stalls are everywhere

**Budget Options:**
- TTD Prasadam halls - ₹10-50
- Local dhabas - ₹50-100 per meal
- Mid-range restaurants - ₹150-300 per person
- Fine dining - ₹300-800 per person`
      },
      {
        title: "How to Reach Tirupati - Complete Travel Guide 2026",
        slug: "how-to-reach-tirupati-2026",
        image: "https://images.unsplash.com/photo-1526907157318-996a9ce49e5e?w=800&q=80",
        images: [
          "https://images.unsplash.com/photo-1526907157318-996a9ce49e5e?w=800&q=80",
          "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&q=80"
        ],
        description: "Complete travel guide - flights, trains, buses, and road routes to Tirupati from all major cities.",
        content: `Tirupati is well-connected by all modes of transport.

**By Air:**
- **Tirupati Airport (TIR)** - 15km from city
- Daily flights from Chennai, Hyderabad, Bangalore
- Direct flights from Delhi, Mumbai
- Taxi: ₹500-800 to city

**By Train:**
- **Tirupati Main (TPTY)** - 1km from bus stand
- Well-connected to:
  - Chennai (3-4 hours)
  - Bangalore (5-6 hours)
  - Hyderabad (6-7 hours)
  - Visakhapatnam (8-9 hours)
- Many superfast Express trains

**By Road:**
- NH 16 passes through Tirupati
- **From Chennai:** 150km, 3 hours via APSRTC Volvo
- **From Bangalore:** 250km, 5 hours
- **From Hyderabad:** 550km, 10 hours
- KSRTC & private buses available

**Local Transport:**
- Auto rickshaws (negotiate or meter)
- TTD free buses on Tirumala
- App-based cabs (Ola, Uber)
- Car/bike rentals available

**Getting to Tirumala:**
- 22km from Tirupati
- APSRTC buses every 10 minutes
- Private taxis available
- TTD free buses for pilgrims`
      },
      {
        title: "Hidden Gems of Tirupati - Beyond Temples",
        slug: "hidden-gems-tirupati",
        image: "https://images.unsplash.com/photo-1590054019677-3d2b1e83d4d8?w=800&q=80",
        images: [
          "https://images.unsplash.com/photo-1590054019677-3d2b1e83d4d8?w=800&q=80",
          "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&q=80"
        ],
        description: "Explore lesser-known places beyond the famous temples - waterfalls, forts, and hidden treasures.",
        content: `Beyond famous temples, Tirupati has many hidden treasures!

**Unexplored Places:**

1. **Silathoranam** - Natural rock arch, great photos
2. **Deer Park** - Scenic with deer, on Tirumala
3. **Chandragiri Fort** - 11th century, great views
4. **Baba Budan Shrine** - Islamic shrine on Tirumala
5. **Sri Kalahasti** - Less crowded Shiva temple

**Nature Spots:**
- **Sri Venkateswara National Park** - Trekking, rare plants
- **Horsley Hills** - 130km, summer retreat
- **Garuda Rock Viewpoint** - Best sunset views
- **Akasaganga** - Holy waterfall

**Historical Gems:**
- **Chandragiri Palace** - Museum with artifacts
- **Sri Venkateswara Museum** - Temple history
- **Parasareswara Temple** - Oldest Shiva lingam

**Theerthams (Sacred Waters):**
- **Papavinasanam** - Cleanses sins
- **Gogarbham** - Healing cave
- **Japali** - Forest meditation

**Tips for Exploring:**
- Rent a scooter/bike for local travel
- Start early morning
- Ask locals for hidden spots
- Carry water and snacks
- Wear comfortable shoes`
      },
      {
        title: "Best Time to Visit Tirupati - Season Guide",
        slug: "best-time-to-visit-tirupati",
        image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&q=80",
        images: [
          "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&q=80",
          "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80"
        ],
        description: "Know the best season to visit Tirupati temple and surrounding attractions for a comfortable trip.",
        content: `Here's your complete guide to the best time to visit Tirupati.

**Overall Best: October - March**
- Pleasant weather (15-30°C)
- Ideal for temple visits
- Good for sightseeing
- Less crowded than peak season

**Monsoon (July - September)**
- Good for waterfalls
- Lush green landscapes
- Less tourists
- Some roads may be closed
- Best for: Nature lovers

**Summer (April - June)**
- Very hot (35-45°C)
- Not recommended for elderly/children
- Fewer crowds
- Good for: Budget travelers
- Tip: Stay hydrated, early morning visits

**Festival Seasons:**
- **Brahmotsavam (Sep-Oct)** - Grand but very crowded
- **Vasanthotsavam (Apr-May)** - Beautiful decorations
- **Rathasaptham (Jan-Feb)** - Colorful processions
- **Purnima (Full Moon)** - Very crowded

**Best Days:**
- Weekdays (Monday-Thursday)
- Avoid weekends if possible

**Worst Time to Avoid:**
- Full moon days (Purnima)
- Diwali weekend
- Long weekends
- Brahmotsavam (if you hate crowds)

**What to Pack:**
- Comfortable walking shoes
- Water bottle
- Sunscreen (summer)
- Umbrella (monsoon)`
      },
      {
        title: "Family Activities in Tirupati - Complete Guide",
        slug: "family-activities-tirupati",
        image: "https://images.unsplash.com/photo-1557351245-0d3af6f6592f?w=800&q=80",
        images: [
          "https://images.unsplash.com/photo-1557351245-0d3af6f6592f?w=800&q=80",
          "https://images.unsplash.com/photo-1484406566174-9da000fda645?w=800&q=80"
        ],
        description: "Best family-friendly activities in Tirupati - zoos, parks, science centre, and fun for kids.",
        content: `Tirupati is great for families with plenty of activities!

**Top Family Attractions:**

1. **Sri Venkateswara Zoological Park**
   - 12km from city, 5500 acres
   - 1500+ animals, 100+ species
   - Open: 8AM-5:30PM, Closed Monday
   - Entry: ₹30 adults, ₹15 children
   - Half-day visit recommended

2. **Regional Science Centre**
   - 5km from city
   - Hands-on science exhibits
   - Planetarium shows
   - Open: 10AM-5:30PM, Closed Monday
   - Entry: ₹40 adults, ₹20 children

3. **Children's Park (Alipiri)**
   - 4km, great for kids
   - Play equipment, rides
   - Free entry

4. **Deer Park (Tirumala)**
   - See deer up close
   - Scenic valley views
   - Entry: ₹10

5. **Chandragiri Palace**
   - Historical artifacts
   - Great for older kids
   - Entry: ₹25

**Tips for Families:**
- Start early to avoid heat
- Carry snacks and water
- Plan 2-3 attractions per day
- Book hotels near city for day trips to Tirumala
- Keep emergency contacts handy`
      },
      {
        title: "Shopping Guide in Tirupati - What to Buy",
        slug: "shopping-guide-tirupati",
        image: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=800&q=80",
        images: [
          "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=800&q=80"
        ],
        description: "What to buy and where to shop in Tirupati - from temple souvenirs to local handicrafts.",
        content: `Tirupati offers great shopping for souvenirs and gifts!

**Must-Buy Items:**

1. **Tirupati Laddu** - Famous worldwide prasadam
2. **Wooden Toys** - Handcrafted, colorful
3. **Brass Items** - Lamp, deities
4. **Silk Clothes** - Dharmavaram silk
5. **Temple Photos** - Framed deities
6. **Tonsure Hair** - For wishes (sold at shops)

**Best Shopping Places:**

1. **Tirupati Handicrafts Emporium**
   - Government-run, quality guaranteed
   - Wooden toys, brass items
   - Near bus stand

2. **Tilak Road**
   - Main shopping street
   - Sarees, jewelry, electronics
   - Bargaining expected

3. **Tirumala Shops**
   - Near temple entrance
   - Laddus, prasadam
   - Sacred items

4. **Khadgam**
   - Traditional weapons
   - Religious items

**Tips:**
- Compare prices before buying
- TTD emporium has fixed prices
- Bargain at local markets
- Keep receipt for customs (international)`
      },
      {
        title: "Brahmotsavam Festival Tirumala - Complete Guide",
        slug: "brahmotsavam-festival-tirumala",
        image: "https://images.unsplash.com/photo-1565073624494-2a11d9b5b8e1?w=800&q=80",
        images: [
          "https://images.unsplash.com/photo-1565073624494-2a11d9b5b8e1?w=800&q=80",
          "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=800&q=80"
        ],
        description: "Everything about Tirumala Brahmotsavam - the biggest festival, dates, rituals, and travel tips.",
        content: `Brahmotsavam is the biggest festival at Tirumala temple!

**About the Festival:**
- 9-day grand celebration
- Held in September-October
- Marks the birthday of Lord Venkateswara
- Over 1 lakh devotees daily

**Daily Schedule:**

**Day 1: Anantha Vritam**
- Flag hoisting ceremony
- Main god taken out

**Day 2: Dwajarohanam**
- Procession with temple flag

**Day 3-7: Various Processions**
- Different avatars of Vishnu
- Temple to temple

**Day 8: Chakra Snanam**
- Holy bath of chakra
- Main event

**Day 9: Garudan**
- Concluding ceremony
- Final procession

**Tips for Visiting During Brahmotsavam:**
- Book accommodation 2 months ahead
- Expect 6-12 hour darshan queues
- Book special darshan in advance
- Carry water, snacks, umbrella
- Wear comfortable clothes
- Avoid if you dislike crowds

**Alternative:**
- Watch live stream online
- Visit after festival for normal darshan`
      }
    ];

    await Place.insertMany(places);
    await Blog.insertMany(blogs);

    return NextResponse.json({ 
      message: "Seed successful", 
      places: places.length,
      blogs: blogs.length 
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: "Seed failed" });
  }
}
