'use client';

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { LucideIcon, ArrowUpRight } from 'lucide-react';

export interface Skill {
  icon: LucideIcon;
  name: string;
  description: string;
  color: string;
  tags?: string[];
}

interface SkillCardProps {
  skill: Skill;
  className?: string;
}

export default function SkillCard({ skill, className }: SkillCardProps) {
  const Icon = skill.icon;

  return (
    <Card className={cn(
      "h-full flex flex-col p-6 relative overflow-hidden group cursor-pointer border-0 bg-transparent shadow-none",
      className
    )}>
      {/* Glow effect matching the card index gradient color */}
      <div className={cn(
        "absolute -right-10 -top-10 w-32 h-32 rounded-full blur-2xl opacity-15 transition-all duration-500 group-hover:scale-150 group-hover:opacity-35 bg-gradient-to-br pointer-events-none",
        skill.color
      )} />

      <CardContent className="p-0 flex flex-col h-full z-10">
        {/* Top row with icon & subtle micro arrow indicator */}
        <div className="flex items-center justify-between mb-5">
          {/* Premium Icon Container with outer gradient border */}
          <div className={cn(
            "w-12 h-12 rounded-xl flex items-center justify-center p-[1.5px] shadow-sm bg-gradient-to-br transition-transform duration-300 group-hover:scale-110",
            skill.color
          )}>
            <div className="w-full h-full rounded-[10px] bg-background dark:bg-card flex items-center justify-center transition-all duration-300 group-hover:bg-transparent">
              <Icon className="w-6 h-6 transition-all duration-300 text-foreground group-hover:text-white" />
            </div>
          </div>

          <div className="w-8 h-8 rounded-full border border-border/40 flex items-center justify-center opacity-30 group-hover:opacity-100 group-hover:border-foreground/30 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
            <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors" />
          </div>
        </div>

        {/* Skill Name with clean text at rest & smooth gradient on hover */}
        <h3 className="text-xl font-bold mb-2.5 transition-colors duration-300 text-foreground">
          <span className={cn(
            "transition-all duration-300 bg-clip-text text-foreground group-hover:text-transparent group-hover:bg-gradient-to-r",
            skill.color
          )}>
            {skill.name}
          </span>
        </h3>

        {/* Skill Description */}
        <p className="text-muted-foreground leading-relaxed text-sm">
          {skill.description}
        </p>

        {/* Skill Badges / Tech Pills */}
        {skill.tags && skill.tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mt-4 pt-4 border-t border-border/40 mt-auto">
            {skill.tags.map((tag, idx) => (
              <span
                key={idx}
                className="text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-muted/60 text-muted-foreground border border-border/40 group-hover:border-border/80 group-hover:text-foreground transition-all duration-200 hover:scale-105"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
