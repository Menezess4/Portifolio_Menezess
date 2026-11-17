export function renderNavbar(nav) {
  return `
    <header class="fixed top-0 inset-x-0 z-40 h-16 bg-black/90 backdrop-blur-md border-b border-[#18181D]">
      <div class="max-w-5xl mx-auto h-full px-6 flex items-center justify-between">
        <button
          type="button"
          translate="no"
          data-back-home
          class="font-mono-code text-sm font-medium text-[#FAFAFA] tracking-tight hover:opacity-80 transition-opacity cursor-pointer"
        >
          gustavo.dev
        </button>

        <!-- Navegação Desktop -->
        <nav class="hidden md:flex items-center gap-7 font-mono-code text-xs text-[#A1A1AA]">
          <a href="#sobre" data-nav-section="#sobre" class="hover:text-[#FAFAFA] transition-colors">${nav.about}</a>
          <a href="#habilidades" data-nav-section="#habilidades" class="hover:text-[#FAFAFA] transition-colors">${nav.skills}</a>
          <a href="#projetos" data-nav-section="#projetos" class="hover:text-[#FAFAFA] transition-colors">${nav.projects}</a>
          <a href="#formacao" data-nav-section="#formacao" class="hover:text-[#FAFAFA] transition-colors">${nav.education}</a>
          <a href="#contato" data-nav-section="#contato" class="hover:text-[#FAFAFA] transition-colors">${nav.contact}</a>
        </nav>

        <!-- Botão Menu Mobile -->
        <button
          type="button"
          id="mobile-menu-toggle"
          aria-label="Menu"
          class="md:hidden px-2.5 py-1.5 border border-[#18181D] bg-[#08080A] font-mono-code text-xs text-[#FAFAFA]"
        >
          MENU
        </button>
      </div>

      <!-- Drawer Mobile -->
      <div
        id="mobile-menu-drawer"
        class="hidden md:hidden bg-black border-b border-[#18181D] px-6 py-5 space-y-3 font-mono-code text-xs text-[#A1A1AA]"
      >
        <a href="#sobre" data-nav-section="#sobre" class="block py-1.5 hover:text-[#FAFAFA]">${nav.about}</a>
        <a href="#habilidades" data-nav-section="#habilidades" class="block py-1.5 hover:text-[#FAFAFA]">${nav.skills}</a>
        <a href="#projetos" data-nav-section="#projetos" class="block py-1.5 hover:text-[#FAFAFA]">${nav.projects}</a>
        <a href="#formacao" data-nav-section="#formacao" class="block py-1.5 hover:text-[#FAFAFA]">${nav.education}</a>
        <a href="#contato" data-nav-section="#contato" class="block py-1.5 hover:text-[#FAFAFA]">${nav.contact}</a>
      </div>
    </header>
  `;
}