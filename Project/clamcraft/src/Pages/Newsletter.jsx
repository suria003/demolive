export default function Newsletter() {
    return (
        <form
            class="h-auto w-auto mb-5"
        >
            <div class="flex gap-1">
                <div
                    class="relative rounded-lg w-64 overflow-hidden before:absolute before:w-12 before:h-12 before:content[''] before:right-0 before:bg-violet-500 before:rounded-full before:blur-lg after:absolute after:z-10 after:w-20 after:h-20 after:content[''] after:bg-rose-300 after:right-12 after:top-3 after:rounded-full after:blur-lg"
                >
                    <input
                        type="text"
                        class="relative bg-transparent ring-0 outline-none border border-neutral-500 text-neutral-900 placeholder-violet-700 text-sm rounded-lg focus:ring-violet-500 placeholder-opacity-60 focus:border-violet-500 block w-full p-2.5 checked:bg-emerald-500"
                        placeholder="Mail..."
                    />
                </div>
                <button
                    class="bg-violet-500 text-neutral-50 p-2 rounded-lg hover:bg-violet-400"
                >
                    Subscribe
                </button>
            </div>
        </form>
    );
}