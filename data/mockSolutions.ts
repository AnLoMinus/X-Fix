import { Solution, Category } from '../types';

export const MOCK_SOLUTIONS: Solution[] = [
  {
    id: 1,
    title: "Instant Migraine Relief",
    category: Category.HEALTH,
    shortDescription: "A proven technique using acupressure and cold therapy to reduce migraine intensity within minutes.",
    fullContent: "Apply an ice pack to the back of the neck while soaking hands in warm water. Simultaneously, massage the LI4 pressure point (between thumb and index finger) for 3-5 minutes. This draws blood away from the head and stimulates pain-relieving endorphins.",
    tags: ["Headache", "Natural", "Pain Relief"],
    likes: 1240
  },
  {
    id: 2,
    title: "Fix C++ Segmentation Fault",
    category: Category.TECH,
    shortDescription: "Debugging steps for the dreaded Segfault 11 error in C/C++ applications.",
    fullContent: "1. Check for uninitialized pointers. 2. Ensure array indices are within bounds. 3. Use tools like Valgrind or GDB. Run `valgrind --leak-check=yes ./myprogram` to pinpoint invalid memory access.",
    tags: ["Programming", "Debugging", "C++"],
    likes: 856
  },
  {
    id: 3,
    title: "Unclog Drain Without Chemicals",
    category: Category.HOME,
    shortDescription: "Clear slow drains using household ingredients safe for pipes.",
    fullContent: "Pour 1/2 cup of baking soda down the drain, followed by 1/2 cup of white vinegar. Cover the drain with a cloth for 15 minutes as it fizzes. Flush with a kettle of boiling water. Repeat if necessary.",
    tags: ["DIY", "Plumbing", "Eco-friendly"],
    likes: 3400
  },
  {
    id: 4,
    title: "Optimize Logistics Route",
    category: Category.LOGISTICS,
    shortDescription: "Basic principles for reducing delivery times in last-mile logistics.",
    fullContent: "Implement the 'Traveling Salesman' heuristic. Group deliveries by zip code first, then sequence them to minimize left turns (which take longer in traffic). Use route optimization software for fleets larger than 3 vehicles.",
    tags: ["Business", "Efficiency", "Driving"],
    likes: 520
  },
  {
    id: 5,
    title: "Fix Insomnia Naturally",
    category: Category.HEALTH,
    shortDescription: "The 4-7-8 breathing technique to fall asleep faster.",
    fullContent: "Inhale quietly through the nose for 4 seconds. Hold breath for 7 seconds. Exhale forcefully through the mouth making a whoosh sound for 8 seconds. Repeat the cycle 4 times. This calms the nervous system.",
    tags: ["Sleep", "Wellness", "Anxiety"],
    likes: 9200
  },
  {
    id: 6,
    title: "Vertical Center in CSS",
    category: Category.TECH,
    shortDescription: "The modern, reliable way to center any element.",
    fullContent: "Parent element: `display: grid; place-items: center; min-height: 100vh;`. This is the cleanest modern approach supported by all major browsers.",
    tags: ["CSS", "Web Dev", "Frontend"],
    likes: 5432
  },
  {
    id: 7,
    title: "Remove Rust from Tools",
    category: Category.HOME,
    shortDescription: "Restore old tools using vinegar.",
    fullContent: "Submerge rusty tools in a container of white vinegar for 24 hours. Scrub with a wire brush or aluminum foil. Rinse with water and immediately dry and oil to prevent new rust.",
    tags: ["Restoration", "Tools", "Hack"],
    likes: 780
  },
  {
    id: 8,
    title: "Reduce NPM Bundle Size",
    category: Category.TECH,
    shortDescription: "Strategies to shrink your JavaScript bundle.",
    fullContent: "1. Use `source-map-explorer` to visualize weight. 2. Implement Tree Shaking (ES Modules). 3. Lazy load routes with `React.lazy`. 4. Replace heavy libraries (e.g., use `date-fns` instead of `moment`).",
    tags: ["Performance", "JavaScript", "React"],
    likes: 1105
  }
];