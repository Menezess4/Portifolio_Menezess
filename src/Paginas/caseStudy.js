export function renderCaseStudyPage({ project, allProjects, labels }){
    if(!project) return "";
    return `
    <main class="max-w-5xl mx-auto px-6 pt-28 pb-24">
      <!-- Barra superior de navegação da página -->
      <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-8 mb-10 border-b border-[#18181D]">
        <button
          type="button"
          data-back-home
          class="inline-flex items-center gap-2 font-mono-code text-xs text-[#A1A1AA] hover:text-[#FAFAFA] transition-colors cursor-pointer w-fit"
        >
          <span>←</span>
          <span>${labels.backHome}</span>
        </button>

        <!-- Troca rápida entre projetos -->
        <div class="flex flex-wrap items-center gap-1.5 font-mono-code text-xs">
          ${allProjects
            .map(
              (item) => `
              <button
                type="button"
                data-open-project="${item.id}"
                class="px-3 py-1.5 border transition-colors cursor-pointer ${
                  item.id === project.id
                    ? "bg-[#FAFAFA] text-black border-[#FAFAFA] font-semibold"
                    : "bg-[#08080A] text-[#A1A1AA] border-[#18181D] hover:border-[#2C2C35] hover:text-[#FAFAFA]"
                }"
              >
                ${item.index}. ${item.title.split("—")[0].trim()}
              </button>
            `
            )
            .join("")}
        </div>
      </div>

      <!-- Cabeçalho do Projeto -->
      <header class="mb-12">
        <div class="flex items-center gap-3 font-mono-code text-xs text-[#52525B] mb-3">
          <span>${project.index}</span>
          <span>/</span>
          <span>${project.categoryLabel}</span>
          <span>/</span>
          <span>${project.year}</span>
        </div>

        <h1 class="text-3xl sm:text-5xl font-bold tracking-tight text-[#FAFAFA] leading-tight mb-5">
          ${project.title}
        </h1>

        <p class="text-base sm:text-lg text-[#A1A1AA] max-w-3xl leading-relaxed mb-6">
          ${project.summary}
        </p>

        <div class="flex flex-wrap items-center justify-between gap-4 pt-2">
          <div class="flex flex-wrap gap-2">
            ${project.stack
              .map(
                (tech) => `
                <span class="font-mono-code text-xs px-3 py-1 bg-[#08080A] border border-[#18181D] text-[#A1A1AA]">
                  ${tech}
                </span>
              `
              )
              .join("")}
          </div>

          <a
            href="${project.repoUrl}"
            target="_blank"
            rel="noreferrer"
            class="px-4 py-2.5 bg-[#FAFAFA] text-black font-mono-code text-xs font-semibold hover:bg-[#D4D4D8] transition-colors"
          >
            ${labels.repoBtn}
          </a>
        </div>
      </header>

      <!-- Conteúdo Estruturado do Estudo de Caso -->
      <div class="space-y-8">
        <section class="surface-card p-6 sm:p-8">
          <h2 class="font-mono-code text-xs text-[#52525B] uppercase tracking-wider mb-3">
            ${labels.context}
          </h2>
          <p class="text-base text-[#A1A1AA] leading-relaxed">
            ${project.caseStudy.context}
          </p>
        </section>

        <section class="surface-card p-6 sm:p-8">
          <h2 class="font-mono-code text-xs text-[#52525B] uppercase tracking-wider mb-4">
            ${labels.architecture}
          </h2>
          <div class="bg-black border border-[#18181D] p-5 overflow-x-auto">
            <pre class="font-mono-code text-xs sm:text-sm text-[#FAFAFA] leading-relaxed">${project.caseStudy.architecture.join("\n")}</pre>
          </div>
        </section>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <section class="surface-card p-6 sm:p-8">
            <h2 class="font-mono-code text-xs text-[#52525B] uppercase tracking-wider mb-4">
              ${labels.decisions}
            </h2>
            <ul class="space-y-3 text-sm sm:text-base text-[#A1A1AA] leading-relaxed">
              ${project.caseStudy.decisions
                .map(
                  (item) => `
                  <li class="flex items-start gap-3">
                    <span class="font-mono-code text-[#FAFAFA] mt-0.5">—</span>
                    <span>${item}</span>
                  </li>
                `
                )
                .join("")}
            </ul>
          </section>

          <section class="surface-card p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <h2 class="font-mono-code text-xs text-[#52525B] uppercase tracking-wider mb-4">
                ${labels.outcome}
              </h2>
              <p class="text-base text-[#FAFAFA] leading-relaxed">
                ${project.caseStudy.outcome}
              </p>
            </div>

            <div class="pt-8 mt-8 border-t border-[#18181D] flex items-center justify-between">
              <button
                type="button"
                data-back-projects
                class="font-mono-code text-xs text-[#A1A1AA] hover:text-[#FAFAFA] transition-colors cursor-pointer"
              >
                ${labels.backProjects}
              </button>
              <a
                href="${project.repoUrl}"
                target="_blank"
                rel="noreferrer"
                class="font-mono-code text-xs text-[#FAFAFA] underline underline-offset-4 hover:opacity-80"
              >
                GitHub ↗
              </a>
            </div>
          </section>
        </div>
      </div>
    </main>

    <footer class="border-t border-[#18181D] py-8 px-6">
      <div class="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 font-mono-code text-xs text-[#52525B]">
        <span>© 2026 Gustavo Menezes</span>
        <button type="button" data-back-home class="hover:text-[#FAFAFA] transition-colors cursor-pointer">
          ${labels.backHome}
        </button>
      </div>
    </footer>
  `;
}