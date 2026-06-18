import { progressService } from "@/services/progressService";
import { wordsService } from "@/services/wordsService";

const minimalNumberWords = 10;

export async function initProgress() {
  let progress = await progressService.load();
  let active = progressService.getActive(progress);

  if (active.length < 10) {
    console.log('[initProgress] Seeding initial words...');
    const allWords = await wordsService.getAll();
    
    if (!allWords || allWords.length === 0) return;

    const starterPack = allWords.slice(0, minimalNumberWords);
    let updatedProgress = { ...progress };
    
    starterPack.forEach(word => {
      updatedProgress = progressService.activate(updatedProgress, word.id);
    });

    await progressService.save(updatedProgress);
  }
}