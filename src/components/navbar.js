export function renderNavbar({ activeWorkspace, actoveWindowTitle}){
    return 
    `
    <header class="sticky top-0 z-40 h-[34px] w-full bg-[#0E0E10]/95 backdrop-blur border-b border-[#242429] px-3 flex items-center justify-between font-mono-tech text-[11px]">
      <div class="flex items-center gap-1">
        <button
          data-workspace="home"
          class="px-2 py-0.5 border transition-colors cursor-pointer ${
            activeWorkspace === "home"
              ? "bg-[#FAFAFA] text-[#050506] border-[#FAFAFA] font-semibold"
              : "bg-transparent text-[#A1A1AA] border-transparent hover:border-[#242429] hover:text-[#FAFAFA]"
          }"
        >
          [1: workspace]
        </button>
        <button
          data-workspace="case-study"
          class="px-2 py-0.5 border transition-colors cursor-pointer ${
            activeWorkspace === "case-study"
              ? "bg-[#FAFAFA] text-[#050506] border-[#FAFAFA] font-semibold"
              : "bg-transparent text-[#A1A1AA] border-transparent hover:border-[#242429] hover:text-[#FAFAFA]"
          }"
        >
          [2: case-study]
        </button>
      </div>

      <div class="hidden md:flex items-center gap-2 text-[#71717A]">
        <span class="inline-block w-1.5 h-1.5 bg-[#FAFAFA]"></span>
        <span>hyprctl activewindow →</span>
        <span id="waybar-active-window" class="text-[#D4D4D8]">${activeWindowTitle}</span>
      </div>

      <div class="flex items-center gap-3 text-[#A1A1AA]">
        <span class="hidden sm:inline text-[#71717A]">ETH0: UP</span>
        <span id="waybar-clock" class="text-[#FAFAFA]">00:00:00</span>
      </div>
    </header>
  `;
        }
    