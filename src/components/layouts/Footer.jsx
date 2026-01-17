import Link from "next/link";
import {
  Github,
  Twitter,
  Linkedin,
  Mail,
  GraduationCap,
  Heart,
} from "lucide-react";
import Logo from "./Logo";

export default function Footer() {
  return (
    <section className="bg-base-200 text-base-content border-t border-base-300">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Brand Section */}
        <div className="flex flex-col ">
          <Logo />
          <p className="text-sm opacity-70 leading-relaxed">
            Revolutionizing the way students learn by providing a curated
            toolkit of AI-driven productivity and research tools.
          </p>
          <div className="flex gap-4 mt-2">
            <a href="#" className="hover:text-primary transition-colors">
              <Twitter size={20} />
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              <Github size={20} />
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              <Linkedin size={20} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h6 className="section-title opacity-100 font-bold text-primary mb-4">
            Platform
          </h6>
          <div className="flex flex-col gap-3 text-sm">
            <Link
              href="/"
              className="link link-hover opacity-70 hover:opacity-100"
            >
              Home
            </Link>
            <Link
              href="/tools"
              className="link link-hover opacity-70 hover:opacity-100"
            >
              All Study Tools
            </Link>
            <Link
              href="/add-tool"
              className="link link-hover opacity-70 hover:opacity-100"
            >
              Submit a Tool
            </Link>
            <Link
              href="/login"
              className="link link-hover opacity-70 hover:opacity-100"
            >
              Admin Login
            </Link>
          </div>
        </div>

        {/* Resources */}
        <div>
          <h6 className="section-title opacity-100 font-bold text-primary mb-4">
            Support
          </h6>
          <div className="flex flex-col gap-3 text-sm">
            <a className="link link-hover opacity-70 hover:opacity-100">
              Documentation
            </a>
            <a className="link link-hover opacity-70 hover:opacity-100">
              Community Forum
            </a>
            <a className="link link-hover opacity-70 hover:opacity-100">
              API Access
            </a>
            <a className="link link-hover opacity-70 hover:opacity-100">
              Privacy Policy
            </a>
          </div>
        </div>

        {/* Newsletter */}
        <div>
          <h6 className="section-title opacity-100 font-bold text-primary mb-4">
            Newsletter
          </h6>
          <p className="text-sm opacity-70 mb-4">
            Get the latest AI study hacks delivered to your inbox.
          </p>
          <div className="join w-full">
            <input
              type="text"
              placeholder="email@example.com"
              className="input input-bordered input-sm join-item w-full focus:outline-none"
            />
            <button className="btn btn-primary btn-sm join-item border-none">
              Join
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-base-300 bg-base-300/30">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs opacity-60">
          <p>© 2026 Smart Study Tools. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Made with <Heart size={12} className="text-error fill-error" /> for
            students worldwide
          </p>
        </div>
      </div>
    </section>
  );
}
