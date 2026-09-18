'use client';

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';

interface Skill {
  icon: LucideIcon;
  name: string;
  description: string;
  color: string;
}

interface SkillCardProps {
  skill: Skill;
  className?: string;
}

export default function SkillCard({ skill, className }: SkillCardProps) {
  const Icon = skill.icon;

  return (
    <Card className={cn(
      "glass card-hover h-full flex flex-col p-6 transition-all duration-300 relative overflow-hidden group",
      className
    )}>
      {/* Glow effect matching the card index gradient color */}
      <div className={cn(
        "absolute -right-10 -top-10 w-24 h-24 rounded-full blur-2xl opacity-20 transition-all duration-500 group-hover:scale-150 bg-gradient-to-br",
        skill.color
      )} />

      <CardContent className="p-0 flex flex-col h-full z-10">
        {/* Premium Icon Container with outer gradient border */}
        <div className={cn(
          "w-12 h-12 rounded-xl flex items-center justify-center p-[1px] mb-5 shadow-lg shadow-black/5 bg-gradient-to-br",
          skill.color
        )}>
          <div className="w-full h-full rounded-xl bg-background dark:bg-card flex items-center justify-center transition-all duration-300 group-hover:bg-transparent">
            {/* Smooth transition from gradient text to full white text inside the gradient icon container */}
            <Icon className={cn(
              "w-6 h-6 transition-all duration-300 group-hover:text-white text-foreground"
            )} style={{
              color: 'currentColor'
            }} />
          </div>
        </div>

        {/* Skill Name with gradient hover effect */}
        <h3 className={cn(
          "text-xl font-bold mb-2 transition-all duration-300 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r",
          "bg-gradient-to-r from-foreground to-foreground",
          skill.color
        )}>
          {skill.name}
        </h3>

        {/* Skill Description */}
        <p className="text-muted-foreground leading-relaxed text-sm mt-2">
          {skill.description}
        </p>
      </CardContent>
    </Card>
  );
}
