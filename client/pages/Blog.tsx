import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ScrollToTop } from "@/components/ui/scroll-to-top";
import { useToast } from "@/hooks/use-toast";
import Seo from "@/components/Seo";

// Featured and latest blog posts data
const featuredPost = {
  title: "Revolutionizing Executive Travel",
  excerpt: "How AI and sustainability are reshaping the luxury transportation landscape in 2025",
  date: "October 18, 2025",
  image: "/images/cw-placeholder.svg",
  category: "Future of Travel",
  author: "James Mitchell",
  readTime: "6 min read"
};

const categories = [
  { name: "Executive Travel", count: 12 },
  { name: "Luxury Fleet", count: 8 },
  { name: "Service Excellence", count: 15 },
  { name: "Sustainability", count: 10 },
  { name: "Travel Tips", count: 14 },
  { name: "City Guides", count: 9 }
];

const recentPosts = [
  {
    title: "The Evolution of Our Electric Fleet",
    excerpt: "Introducing our newest Tesla Model S and Mercedes EQS luxury vehicles",
    date: "October 15, 2025",
    image: "/images/cw-placeholder.svg",
    category: "Luxury Fleet",
    author: "Sarah Bennett",
    readTime: "4 min read"
  },
  {
    title: "Dubai to Abu Dhabi: A Premium Journey",
    excerpt: "Experience the epitome of luxury travel between UAE's most dynamic cities",
    date: "October 12, 2025",
    image: "/images/cw-placeholder.svg",
    category: "City Guides",
    author: "Ahmed Hassan",
    readTime: "5 min read"
  },
  {
    title: "The Hallmarks of Chauffeur Excellence",
    excerpt: "What sets our chauffeur service apart in the luxury transport industry",
    date: "October 10, 2025",
    image: "/images/cw-placeholder.svg",
    category: "Service Excellence",
    author: "Michael Chang",
    readTime: "4 min read"
  }
];

const popularArticles = [
  {
    title: "Corporate Travel Trends 2025",
    image: "/images/cw-placeholder.svg",
    category: "Executive Travel",
    readTime: "7 min read"
  },
  {
    title: "Sustainable Luxury: Our Green Initiative",
    image: "/images/cw-placeholder.svg",
    category: "Sustainability",
    readTime: "5 min read"
  },
  {
    title: "London's Hidden Business Venues",
    image: "/images/cw-placeholder.svg",
    category: "City Guides",
    readTime: "6 min read"
  },
  {
    title: "The Art of Airport Transfers",
    image: "/images/cw-placeholder.svg",
    category: "Service Excellence",
    readTime: "4 min read"
  }
];

export default function Blog() {
  const { toast } = useToast();
  const [email, setEmail] = useState("");

  const notifyComingSoon = () =>
    toast({
      title: "Coming soon",
      description: "Full articles are on the way — check back shortly.",
    });

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    toast({
      title: "Subscribed",
      description: "You're on the list for luxury travel insights.",
    });
    setEmail("");
  };

  return (
    <main className="relative bg-background text-foreground min-h-screen">
      <Seo
        title="Travel Insights & News"
        description="Executive travel tips, fleet updates, and industry insights from Corporate Wheels."
        path="/blog"
      />
      <ScrollToTop />
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-corporate-gold/20 via-background to-background" />
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6">
              <span className="w-2 h-2 rounded-full bg-[#E6A700] animate-pulse" />
              <span className="text-sm text-white/80">Latest Insights</span>
            </div>
            <h1 className="text-4xl md:text-6xl xl:text-7xl font-heading text-white leading-tight mb-6">
              Luxury Travel <span className="text-corporate-gold">Insights</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover the latest in executive travel, fleet updates, and service excellence
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-white/[0.02] backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="relative h-[400px] md:h-full">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="px-3 py-1 rounded-full bg-corporate-gold/10 border border-corporate-gold/20">
                      <span className="text-corporate-gold text-sm">{featuredPost.category}</span>
                    </div>
                    <span className="text-sm text-white/60">{featuredPost.date}</span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-heading text-white mb-4">
                    {featuredPost.title}
                  </h2>
                  <p className="text-muted-foreground mb-6">{featuredPost.excerpt}</p>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="h-10 w-10 rounded-full bg-white/10" />
                    <div>
                      <p className="text-sm text-white">{featuredPost.author}</p>
                      <p className="text-sm text-white/60">{featuredPost.readTime}</p>
                    </div>
                  </div>
                  <Button variant="glow" size="lg" className="w-fit" onClick={notifyComingSoon}>
                    Read Article
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-white/[0.02]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading text-white mb-4">Explore Topics</h2>
            <p className="text-muted-foreground">Find insights on your areas of interest</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((category, index) => (
              <motion.button
                key={index}
                type="button"
                onClick={notifyComingSoon}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white/[0.02] backdrop-blur-sm border border-white/10 rounded-xl p-4 text-center transition-colors hover:bg-white/[0.04]"
              >
                <h3 className="text-white mb-2">{category.name}</h3>
                <span className="text-sm text-corporate-gold">{category.count} articles</span>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Posts Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-heading text-white mb-12">Latest Articles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentPosts.map((post, index) => (
              <motion.article
                key={index}
                role="button"
                tabIndex={0}
                onClick={notifyComingSoon}
                onKeyDown={(e) => e.key === "Enter" && notifyComingSoon()}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="bg-white/[0.02] backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden transition-transform hover:translate-y-[-4px] cursor-pointer"
              >
                <div className="relative h-48">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="px-3 py-1 rounded-full bg-corporate-gold/10 border border-corporate-gold/20">
                      <span className="text-corporate-gold text-sm">{post.category}</span>
                    </div>
                    <span className="text-sm text-white/60">{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-heading text-white mb-3">{post.title}</h3>
                  <p className="text-sm text-muted-foreground mb-6">{post.excerpt}</p>
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-full bg-white/10" />
                    <div>
                      <p className="text-sm text-white">{post.author}</p>
                      <p className="text-xs text-white/60">{post.date}</p>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Articles */}
      <section className="py-16 bg-white/[0.02]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-heading text-white mb-12">Popular This Week</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularArticles.map((article, index) => (
              <motion.div
                key={index}
                role="button"
                tabIndex={0}
                onClick={notifyComingSoon}
                onKeyDown={(e) => e.key === "Enter" && notifyComingSoon()}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative h-48 rounded-xl overflow-hidden mb-4">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs text-corporate-gold">{article.category}</span>
                      <span className="text-xs text-white/60">• {article.readTime}</span>
                    </div>
                    <h3 className="text-lg text-white font-medium leading-tight">{article.title}</h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white/[0.02] backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-12 text-center"
          >
            <h2 className="text-3xl font-heading text-white mb-4">Stay Updated</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter for exclusive insights on luxury travel, fleet updates,
              and industry trends delivered to your inbox.
            </p>
            <form
              onSubmit={handleNewsletterSubmit}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto"
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-corporate-gold/50"
              />
              <Button type="submit" variant="glow" size="lg" className="w-full sm:w-auto">
                Subscribe
              </Button>
            </form>
          </motion.div>
        </div>
      </section>
    </main>
  );
}