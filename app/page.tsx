"use client";

import { useState } from "react";
import { toast } from "@/components/ui/use-toast";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Star,
  Leaf,
  Heart,
  Brain,
  Calendar,
  CheckCircle,
  Quote,
  Users,
  Zap,
  GraduationCap,
  Building,
  School,
  Sparkles,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>,
    type: "question" | "consultation",
  ) => {
    e.preventDefault();
    setLoading(true);
    // setMessage("");

    const form = e.currentTarget;
    const formData = new FormData(form);
    // const formData = new FormData(e.currentTarget);
    const body = Object.fromEntries(formData.entries());
    body.formType = type;

    console.log("Form data:", body);
    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      if (res.ok) {
        toast({
          title: "âœ… Success",
          description: "Your request has been sent!",
          duration: 3000,
        });
        console.log("Form submitted:", body);
        form.reset();
      } else {
        toast({
          title: "âŒ Failed",
          description: "Please try again later.",
          variant: "destructive",
        });
      }
    } catch (err) {
      console.error(err);
      toast({
        title: "âš ï¸ Error",
        description: "Something went wrong.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const testimonials = [
    {
      name: "Amira S.",
      service: "Energy Healing Session",
      text: "A special thank you to Angela — you guided me through every phase of the day, helping me balance my emotions, process my thoughts, and find peace. Your words were more than just comforting… they made me believe in myself again. You reminded me that I am lucky, that I deserve light. You personally helped me release the weight I was carrying — the block that was holding me back. That session with you was powerful. It truly removed so much heaviness I didn't even realize I was holding onto. It was more than a healing — it was a transformation. Forever grateful for your support and guidance.",
      rating: 5,
    },
    {
      name: "Nadia A.",
      service: "Sound Healing Session",
      text: "I came to Angela feeling completely burnt out — mentally exhausted and emotionally drained. The Sound Healing session was unlike anything I had experienced before. The vibrations of the Tibetan bowls seemed to melt away every layer of stress I was carrying. I left feeling lighter, clearer, and deeply at peace. Angela holds such a safe and warm space. I highly recommend this to anyone who needs to truly rest and reset.",
      rating: 5,
    },
    {
      name: "Priya M.",
      service: "Lama Fera Healing",
      text: "I had been feeling blocked and heavy for months — emotionally and spiritually. A friend suggested I try Lama Fera with Angela and I am so glad I did. The session was powerful yet incredibly gentle. I could feel the energy shifting in my body throughout. Afterwards, I felt a deep sense of calm and clarity I had not felt in a long time. Angela's presence is so grounding and compassionate. Truly a transformative experience.",
      rating: 5,
    },
    {
      name: "Sarah K.",
      service: "Energy Healing Session",
      text: "It is a beautiful ritual to experience energy healing with Angela. I had an incredible experience. Hearing her insights helped me connect the dots and pieces together. I highly recommend this to anyone on a healing journey. The ambience is beautiful, warm, inviting and a safe space to be. Angela is a lovely and hospitable host.",
      rating: 5,
    },
    {
      name: "Layla R.",
      service: "Sacred Sound and Reiki Infusion",
      text: "The Sacred Sound and Reiki Infusion session with Angela was one of the most profound experiences of my life. I could feel the vibrations realigning something deep within me. I walked in anxious and overwhelmed, and walked out feeling like myself again — calm, centred, and truly at peace. Angela has a beautiful gift and an even more beautiful heart. I will absolutely be coming back.",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-stone-100 to-sage-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-sage-100 text-sage-700 hover:bg-sage-100">
                  🌺 Welcome to ATHMA Wellness Sanctuary
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-serif text-stone-800 leading-tight">
                  Awaken Your Soul,
                  <span className="text-sage-600"> Restore Your Balance</span>
                </h1>
                <p className="text-lg text-stone-600 leading-relaxed">
                  True wellness is more than the absence of illness — it's a
                  deep alignment of mind, body, and soul. Through ancient
                  healing practices and sacred energy work, Angela gently guides
                  you back to balance, clarity, and inner peace.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="#" onClick={(e) => e.preventDefault()}>
                  <Button
                    size="lg"
                    className="bg-sage-600 hover:bg-sage-700 text-white"
                  >
                    <Calendar className="mr-2 h-5 w-5" />
                    Book Free Consultation
                  </Button>
                </Link>
                <Link href="#" onClick={(e) => e.preventDefault()}>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-stone-300 text-stone-700 hover:bg-stone-50 bg-transparent"
                  >
                    Meet Angela
                  </Button>
                </Link>
              </div>
              <div className="flex items-center gap-6 pt-4">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-sage-600" />
                  <span className="text-sm text-stone-600">
                    Reiki Master Teacher
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-sage-600" />
                  <span className="text-sm text-stone-600">
                    Lama Fera Practitioner
                  </span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="angela Joseph.jpeg"
                  alt="Peaceful meditation and healing session"
                  width={500}
                  height={600}
                  className="object-cover w-full h-[600px]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/20 to-transparent" />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-6 shadow-lg border border-stone-200">
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map((i) => (
                      <div
                        key={i}
                        className="w-8 h-8 rounded-full bg-sage-200 border-2 border-white"
                      />
                    ))}
                  </div>
                  <div>
                    <div className="flex items-center gap-1">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-amber-400 text-amber-400"
                        />
                      ))}
                    </div>
                    <p className="text-sm text-stone-600">Global Clientele</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Angela Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-stone-100 text-stone-700">
                  Meet Your Healing Partner
                </Badge>
                <h2 className="text-3xl lg:text-4xl font-serif text-stone-800">
                  Angela Joseph - Founder
                </h2>
                <p className="text-stone-600 leading-relaxed">
                  I'm a certified healing practitioner specializing in Lama
                  Fera, Sound Therapy, and Tarot Reading — dedicated to
                  supporting your journey through sacred energy work and
                  intuitive guidance.
                </p>
                <p className="text-stone-600 leading-relaxed">
                  Each healing modality I offer comes not just from training,
                  but from a deeply personal journey. It was through my own
                  experiences that I discovered the profound power of energy
                  healing and the mind-body-soul connection.
                </p>
                <p className="text-stone-600 leading-relaxed">
                  As the Founder of ATHMA Wellness Sanctuary in Dubai, UAE, I
                  have had the privilege of supporting a diverse, global
                  clientele through holistic and sacred healing practices —
                  right here in the heart of Dubai.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4">
                  <div className="text-3xl font-bold text-sage-600">17+</div>
                  <div className="text-sm text-stone-600">
                    Years Professional Experience
                  </div>
                </div>
                <div className="text-center p-4">
                  <div className="text-3xl font-bold text-sage-600">Global</div>
                  <div className="text-sm text-stone-600">Clientele Served</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="session.jpeg"
                alt="Angela Joseph - Founder of ATHMA Wellness Sanctuary"
                width={500}
                height={500}
                className="rounded-2xl object-cover w-full h-[500px] shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Approach Section */}
      <section className="py-20 bg-stone-50">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-serif text-stone-800">
              Our Approach to Healing
            </h2>
            <p className="text-stone-600 max-w-2xl mx-auto">
              At ATHMA Wellness Sanctuary, we create a safe and sacred space
              where you can release what no longer serves you — and return to
              balance, clarity, and inner peace.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-stone-200 text-center">
              <CardContent className="p-8 space-y-4">
                <div className="mx-auto w-16 h-16 bg-sage-100 rounded-full flex items-center justify-center">
                  <Heart className="h-8 w-8 text-sage-600" />
                </div>
                <h3 className="text-xl font-semibold text-stone-800">
                  Holistic & Empowering
                </h3>
                <p className="text-stone-600">
                  ATHMA Wellness Sanctuary guides you on a journey of
                  self-discovery and healing through sacred energy work —
                  empowering mind, body, and soul to restore balance, clarity,
                  peace, and purpose.
                </p>
              </CardContent>
            </Card>

            <Card className="border-stone-200 text-center">
              <CardContent className="p-8 space-y-4">
                <div className="mx-auto w-16 h-16 bg-sage-100 rounded-full flex items-center justify-center">
                  <Brain className="h-8 w-8 text-sage-600" />
                </div>
                <h3 className="text-xl font-semibold text-stone-800">
                  Therapeutic & Transformational
                </h3>
                <p className="text-stone-600">
                  Committed to offering healing that supports emotional release,
                  inner calm, and personal transformation — through Lama Fera,
                  Sound Healing, and intuitive Tarot guidance.
                </p>
              </CardContent>
            </Card>

            <Card className="border-stone-200 text-center">
              <CardContent className="p-8 space-y-4">
                <div className="mx-auto w-16 h-16 bg-sage-100 rounded-full flex items-center justify-center">
                  <Sparkles className="h-8 w-8 text-sage-600" />
                </div>
                <h3 className="text-xl font-semibold text-stone-800">
                  Creative & Nurturing
                </h3>
                <p className="text-stone-600">
                  Our purpose is to create a warm, compassionate space where
                  healing unfolds naturally — helping you reconnect with your
                  inner strength, wisdom, and authentic self.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-sage-100 text-sage-700">
              Our Core Services
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-serif text-stone-800">
              Holistic Healing for Mind, Body & Soul
            </h2>
            <p className="text-stone-600 max-w-2xl mx-auto">
              Each service is tailored to your unique needs, helping you achieve
              your goals through the transformative power of holistic healing.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Reiki Healing */}
            <Card className="border-stone-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-sage-100 rounded-lg">
                    <Heart className="h-6 w-6 text-sage-600" />
                  </div>
                  <h3 className="font-semibold text-stone-800">
                    Reiki Healing
                  </h3>
                </div>
                <p className="text-stone-600 text-sm leading-relaxed">
                  Restore balance, renew energy, reconnect with your inner peace
                  through gentle energy healing.
                </p>

                {/* In-Person Sessions */}
                <div className="space-y-3">
                  <h4 className="text-sm font-medium text-stone-700">
                    In-Person Sessions
                  </h4>

                  <div className="border border-stone-100 rounded-lg p-3">
                    <div className="flex justify-between items-center text-sm mb-2">
                      <span className="font-medium text-stone-700">
                        Single Session
                      </span>
                      <span className="font-semibold text-sage-600">
                        AED 120
                      </span>
                    </div>
                    <div className="text-xs text-stone-500 mb-2">
                      Duration: 60 minutes
                    </div>
                    <Link href="#" onClick={(e) => e.preventDefault()}>
                      <Button
                        size="sm"
                        className="w-full bg-sage-600 hover:bg-sage-700 text-white"
                      >
                        Book In-Person Single
                      </Button>
                    </Link>
                  </div>

                  <div className="border border-stone-100 rounded-lg p-3">
                    <div className="flex justify-between items-center text-sm mb-2">
                      <span className="font-medium text-stone-700">
                        3 Sessions Package
                      </span>
                      <span className="font-semibold text-sage-600">
                        AED 320
                      </span>
                    </div>
                    <div className="text-xs text-stone-500 mb-2">
                      Save AED 40 • Duration: 60 minutes each
                    </div>
                    <Link href="#" onClick={(e) => e.preventDefault()}>
                      <Button
                        size="sm"
                        className="w-full bg-sage-600 hover:bg-sage-700 text-white"
                      >
                        Book In-Person 3 Sessions
                      </Button>
                    </Link>
                  </div>
                </div>

                {/* Distance Sessions */}
                <div className="space-y-3">
                  <h4 className="text-sm font-medium text-stone-700">
                    Distance Sessions
                  </h4>

                  <div className="border border-stone-100 rounded-lg p-3">
                    <div className="flex justify-between items-center text-sm mb-2">
                      <span className="font-medium text-stone-700">
                        Single Session
                      </span>
                      <span className="font-semibold text-sage-600">
                        AED 90
                      </span>
                    </div>
                    <div className="text-xs text-stone-500 mb-2">
                      Duration: 60 minutes
                    </div>
                    <Link href="#" onClick={(e) => e.preventDefault()}>
                      <Button
                        size="sm"
                        className="w-full bg-sage-600 hover:bg-sage-700 text-white"
                      >
                        Book Distance Single
                      </Button>
                    </Link>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div className="border border-stone-100 rounded-lg p-2">
                      <div className="text-xs text-stone-700 mb-1">
                        3 Sessions
                      </div>
                      <div className="text-sm font-semibold text-sage-600 mb-2">
                        AED 250
                      </div>
                      <Link href="#" onClick={(e) => e.preventDefault()}>
                        <Button
                          size="sm"
                          className="w-full text-xs bg-sage-600 hover:bg-sage-700 text-white"
                        >
                          Book 3
                        </Button>
                      </Link>
                    </div>
                    <div className="border border-stone-100 rounded-lg p-2">
                      <div className="text-xs text-stone-700 mb-1">
                        5 Sessions
                      </div>
                      <div className="text-sm font-semibold text-sage-600 mb-2">
                        AED 420
                      </div>
                      <Link href="#" onClick={(e) => e.preventDefault()}>
                        <Button
                          size="sm"
                          className="w-full text-xs bg-sage-600 hover:bg-sage-700 text-white"
                        >
                          Book 5
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="space-y-1 pt-2">
                  {[
                    "Release tension & stress",
                    "Mental clarity",
                    "Physical healing support",
                    "Chakra balancing",
                  ].map((benefit, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 text-xs text-stone-600"
                    >
                      <CheckCircle className="h-3 w-3 text-sage-600" />
                      {benefit}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Lama Fera Healing */}
            <Card className="border-stone-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-sage-100 rounded-lg">
                    <Zap className="h-6 w-6 text-sage-600" />
                  </div>
                  <h3 className="font-semibold text-stone-800">
                    Lama Fera Healing
                  </h3>
                </div>
                <p className="text-stone-600 text-sm leading-relaxed">
                  Ancient Tibetan healing for deep spiritual & energetic
                  transformation from Buddhist monasteries.
                </p>

                <div className="space-y-3">
                  <div className="border border-stone-100 rounded-lg p-3">
                    <div className="flex justify-between items-center text-sm mb-2">
                      <span className="font-medium text-stone-700">
                        In-Person Session
                      </span>
                      <span className="font-semibold text-sage-600">
                        AED 150
                      </span>
                    </div>
                    <div className="text-xs text-stone-500 mb-2">
                      Duration: 30-45 minutes
                    </div>
                    <Link href="#" onClick={(e) => e.preventDefault()}>
                      <Button
                        size="sm"
                        className="w-full bg-sage-600 hover:bg-sage-700 text-white"
                      >
                        Book In-Person
                      </Button>
                    </Link>
                  </div>

                  <div className="border border-stone-100 rounded-lg p-3">
                    <div className="flex justify-between items-center text-sm mb-2">
                      <span className="font-medium text-stone-700">
                        Distance Session
                      </span>
                      <span className="font-semibold text-sage-600">
                        AED 120
                      </span>
                    </div>
                    <div className="text-xs text-stone-500 mb-2">
                      Duration: 30-45 minutes
                    </div>
                    <Link href="#" onClick={(e) => e.preventDefault()}>
                      <Button
                        size="sm"
                        className="w-full bg-sage-600 hover:bg-sage-700 text-white"
                      >
                        Book Distance
                      </Button>
                    </Link>
                  </div>
                </div>

                <div className="space-y-1 pt-2">
                  {[
                    "Remove negative energy",
                    "Clear karmic blocks",
                    "Spiritual growth",
                    "Aura protection",
                  ].map((benefit, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 text-xs text-stone-600"
                    >
                      <CheckCircle className="h-3 w-3 text-sage-600" />
                      {benefit}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Link href="#" onClick={(e) => e.preventDefault()}>
              <Button
                size="lg"
                className="bg-sage-600 hover:bg-sage-700 text-white"
              >
                View All Services & Programs
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-stone-50">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-stone-100 text-stone-700">
              Client Stories
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-serif text-stone-800">
              Real Healing, Real Stories
            </h2>
            <p className="text-stone-600 max-w-2xl mx-auto">
              Hear from those who have experienced the transformative power of
              Angela's healing sessions — and found their way back to balance,
              peace, and inner harmony.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-stone-200">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-amber-400 text-amber-400"
                      />
                    ))}
                  </div>
                  <Quote className="h-6 w-6 text-stone-300" />
                  <p className="text-stone-600 italic leading-relaxed text-sm">
                    "{testimonial.text}"
                  </p>
                  <div className="pt-4 border-t border-stone-100">
                    <div className="font-semibold text-stone-800">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-sage-600">
                      {testimonial.service}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="#" onClick={(e) => e.preventDefault()}>
              <Button
                size="lg"
                variant="outline"
                className="border-stone-300 text-stone-700 hover:bg-stone-50 bg-transparent"
              >
                Read More Stories
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Specialized Programs Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-serif text-stone-800">
              Healing Sessions & Programs
            </h2>
            <p className="text-stone-600 max-w-2xl mx-auto">
              From individual energy healing to group sessions and sacred
              ceremonies — there is a healing experience designed just for you.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Building,
                title: "Group Healing Sessions",
                description:
                  "Sacred group sessions held at wellness studios across Dubai — open to all",
                features: [
                  "Sound Bath Healing",
                  "Group Energy Work",
                  "Cord Cutting Ceremony",
                  "Community Healing",
                ],
              },
              {
                icon: Users,
                title: "Private Sessions",
                description:
                  "One-on-one healing tailored to your personal energy, needs and intentions",
                features: [
                  "Lama Fera Healing",
                  "Sound Therapy",
                  "Tarot Reading",
                  "Energy Balancing",
                ],
              },
              {
                icon: GraduationCap,
                title: "Reiki Training",
                description:
                  "Learn the art of Reiki healing with Angela — Levels 1, 2 & 3 (Master)",
                features: [
                  "Level 1: Self-Healing",
                  "Level 2: Practitioner",
                  "Level 3: Master/Teacher",
                  "Certification",
                ],
              },
              {
                icon: Sparkles,
                title: "Special Events",
                description:
                  "Unique healing events and sacred ceremonies hosted across Dubai",
                features: [
                  "Kundalini Rising",
                  "Money Blockage Clearing",
                  "Hammock Sound Bath",
                  "Seasonal Ceremonies",
                ],
              },
            ].map((program, index) => (
              <Card
                key={index}
                className="border-stone-200 hover:shadow-lg transition-shadow"
              >
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-sage-100 rounded-lg">
                      <program.icon className="h-6 w-6 text-sage-600" />
                    </div>
                    <h3 className="font-semibold text-stone-800">
                      {program.title}
                    </h3>
                  </div>
                  <p className="text-stone-600 text-sm">
                    {program.description}
                  </p>
                  <div className="space-y-1">
                    {program.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2 text-xs text-stone-600"
                      >
                        <CheckCircle className="h-3 w-3 text-sage-600" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-sage-50">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-serif text-stone-800">
              Why Choose ATHMA Wellness Sanctuary?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: CheckCircle,
                title: "In-Person & Distance Sessions",
                description:
                  "Whether you are in Dubai or anywhere in the world, Angela offers both in-person and distance healing sessions",
              },
              {
                icon: Heart,
                title: "Certified Practitioner",
                description:
                  "Angela is a qualified Reiki Master Teacher, Lama Fera Practitioner, Sound Healer and Tarot Reader",
              },
              {
                icon: Users,
                title: "Personalized Healing",
                description:
                  "Every session is shaped around your unique energy, intentions, and what your soul needs most right now",
              },
              {
                icon: Leaf,
                title: "A Safe, Sacred Space",
                description:
                  "Angela creates a warm, judgment-free sanctuary where you can release, heal, and return to yourself",
              },
            ].map((feature, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="mx-auto w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg">
                  <feature.icon className="h-8 w-8 text-sage-600" />
                </div>
                <h3 className="text-xl font-semibold text-stone-800">
                  {feature.title}
                </h3>
                <p className="text-stone-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-sage-100 text-sage-700">
                  Get In Touch
                </Badge>
                <h2 className="text-3xl lg:text-4xl font-serif text-stone-800">
                  Ready to Begin Your Journey?
                </h2>
                <p className="text-stone-600 leading-relaxed">
                  Your healing journey begins with a single step. Reach out to
                  Angela today to book your session and discover the
                  transformative power of sacred energy work — she is here to
                  hold space for you, every step of the way.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-sage-100 rounded-lg">
                    <Phone className="h-5 w-5 text-sage-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-stone-800">Phone</div>
                    <div className="text-stone-600">+971 56 604 1875</div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-3 bg-sage-100 rounded-lg">
                    <Mail className="h-5 w-5 text-sage-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-stone-800">Email</div>
                    <div className="text-stone-600">healwith@athma.ae</div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-3 bg-sage-100 rounded-lg">
                    <MapPin className="h-5 w-5 text-sage-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-stone-800">Location</div>
                    <div className="text-stone-600">
                      Athma Wellness Sanctuary, Dubai
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-3 bg-sage-100 rounded-lg">
                    <Clock className="h-5 w-5 text-sage-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-stone-800">Hours</div>
                    <div className="text-stone-600">
                      Flexible scheduling to suit your needs
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Card className="border-stone-200">
              <CardContent className="p-8 space-y-6">
                <div className="space-y-6">
                  <div className="text-center space-y-2">
                    <h3 className="text-xl font-semibold text-stone-800">
                      Book Your Free Consultation
                    </h3>
                    {/* <p className="text-stone-600 text-sm">
                          15-minute phone call to discuss your goals and see if
                          hypnotherapy is right for you.
                        </p> */}
                  </div>

                  <form
                    onSubmit={(e) => handleSubmit(e, "consultation")}
                    className="space-y-4"
                  >
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-stone-700 mb-2">
                          First Name *
                        </label>
                        <input
                          type="text"
                          required
                          name="firstName"
                          className="w-full px-3 py-2 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sage-500"
                          placeholder="Your first name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-stone-700 mb-2">
                          Last Name *
                        </label>
                        <input
                          type="text"
                          required
                          name="lastName"
                          className="w-full px-3 py-2 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sage-500"
                          placeholder="Your last name"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-stone-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        name="email"
                        className="w-full px-3 py-2 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sage-500"
                        placeholder="your.email@example.com"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-stone-700 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        name="phone"
                        className="w-full px-3 py-2 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sage-500"
                        placeholder="+61 xxx xxx xxx"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-stone-700 mb-2">
                        Preferred Contact Method
                      </label>
                      <select className="w-full px-3 py-2 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sage-500">
                        <option>Phone Call</option>
                        <option>Email</option>
                        <option>Text Message</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-stone-700 mb-2">
                        What would you like to work on?
                      </label>
                      <select
                        name="contactMethod"
                        className="w-full px-3 py-2 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sage-500"
                      >
                        <option>Anxiety & Stress Relief</option>
                        <option>Confidence Building</option>
                        <option>Habit Change</option>
                        <option>Weight Management</option>
                        <option>Sleep Improvement</option>
                        <option>Pain Management</option>
                        <option>Other</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-stone-700 mb-2">
                        Tell me more about your situation
                      </label>
                      <textarea
                        rows={4}
                        className="w-full px-3 py-2 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sage-500"
                        placeholder="Share what you'd like to achieve and any questions you have..."
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={loading}
                      className="w-full bg-sage-600 hover:bg-sage-700 text-white"
                    >
                      Request Free Consultation
                    </Button>
                  </form>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                {/* <Leaf className="h-6 w-6 text-sage-400" /> */}
                <Image width={32} height={32} src="logo.jpeg" alt="logo" />
                <h3 className="text-xl font-serif">ATHMA Wellness Sanctuary</h3>
              </div>
              <p className="text-stone-300 text-sm leading-relaxed">
                A sacred space in the heart of Dubai where you can release what
                no longer serves you, restore your energy, and return to the
                peace and harmony that lives within you.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold">Quick Links</h4>
              <div className="space-y-2 text-sm">
                <Link
                  href="#" onClick={(e) => e.preventDefault()}
                  className="block text-stone-300 hover:text-white transition-colors"
                >
                  About Angela
                </Link>
                <Link
                  href="#" onClick={(e) => e.preventDefault()}
                  className="block text-stone-300 hover:text-white transition-colors"
                >
                  Services
                </Link>
                <Link
                  href="#" onClick={(e) => e.preventDefault()}
                  className="block text-stone-300 hover:text-white transition-colors"
                >
                  Testimonials
                </Link>
                <Link
                  href="#" onClick={(e) => e.preventDefault()}
                  className="block text-stone-300 hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold">Contact Info</h4>
              <div className="space-y-2 text-sm text-stone-300">
                <div>+971 56 604 1875</div>
                <div>healwith@athma.ae</div>
                <div>Athma Wellness Sanctuary, Dubai</div>
              </div>
            </div>
          </div>

          <Separator className="my-8 bg-stone-700" />

          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-stone-400">
            <div>© 2025 ATHMA Wellness Sanctuary. All rights reserved.</div>
            <div className="flex gap-6 mt-4 md:mt-0">
              <Link href="#" onClick={(e) => e.preventDefault()} className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" onClick={(e) => e.preventDefault()} className="hover:text-white transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
