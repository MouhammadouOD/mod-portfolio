"use client"

import Image from "next/image"
import { Star } from "lucide-react"

export default function RestaurantCard() {
  return (
    <div className="max-w-md mx-auto bg-[#f8f8f8] rounded-lg overflow-hidden">
      <div className="relative w-full h-64">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MyfeedBack_Final_Prototype-qIV0kXlZZ73oLucN0Ywrb0yxwTjYzy.png"
          alt="Various dishes on a wooden table including plates with burgers, salads, and other food items"
          fill
          className="object-cover"
        />
      </div>

      <div className="p-5">
        <h2 className="text-3xl font-bold text-[#232323] mb-2">Bottega</h2>
        <p className="text-[#8f8f8f] mb-4">
          The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.
        </p>

        <div className="flex items-center">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star key={star} className="w-6 h-6 fill-[#e8a641] text-[#e8a641] mr-1" />
          ))}
          <span className="text-[#232323] font-bold ml-1">5.0</span>
          <span className="text-[#8f8f8f] ml-1">(876 reviews)</span>
        </div>
      </div>
    </div>
  )
}

