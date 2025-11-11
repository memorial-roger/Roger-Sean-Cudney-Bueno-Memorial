import React, { useState, useEffect } from "react";
import GuestbookEntries from "./GuestbookEntries";

const GuestbookPopup = ({ onClose }) => {
    const [entries, setEntries] = useState([]);
    const [showForm, setShowForm] = useState(true);
    const [loading, setLoading] = useState(false); // ✅ new loading state
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
        privateMessage: "",
    });

    const SHEET_URL = "https://script.google.com/macros/s/AKfycbxzhvF_cBPNe0AUnItdgrpsXWRGIX39kHwAcc6U0zydvobQeTnZSuyS50DqbON5XCWi/exec";

    // ✅ corrected variable name (SCRIPT_URL → SHEET_URL)
    const fetchEntries = async () => {
        try {
            const response = await fetch(SHEET_URL);
            const data = await response.json();
            console.log("Fetched entries:", data);
            setEntries(Array.isArray(data) ? data.reverse() : []);
        } catch (error) {
            console.error("Error fetching entries:", error);
        }
    };

    useEffect(() => {
        fetchEntries();
    }, []);

    const handleChange = (e) =>
        setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (loading) return;
        setLoading(true);

        try {
            await fetch(SHEET_URL, {
                method: "POST",
                mode: "no-cors",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            alert("✅ Your entry has been submitted successfully!");
            onClose();

            // Reset form
            setFormData({ name: "", email: "", message: "", privateMessage: "" });

        } catch (error) {
            console.error("Error submitting:", error);
            alert("❌ Error submitting your entry. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/50">
            <div className="relative bg-white w-[90%] md:w-[600px] max-h-[90vh] overflow-y-auto pb-[42px] pt-9 px-6 md:px-11 shadow-lg">
                <button
                    onClick={onClose}
                    className="absolute top-3 right-4 text-gray-500 hover:text-black text-xl"
                    disabled={loading}
                >
                    ✖
                </button>

                {showForm ? (
                    <>
                        <h2 className="text-2xl font-medium text-start mb-6">
                            Fill out the form
                        </h2>

                        <form
                            onSubmit={handleSubmit}
                            className="flex flex-col space-y-6 text-sm md:text-base"
                        >
                            <div>
                                <label className="block text-[15px] font-normal text-black mb-1">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Your full name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    disabled={loading}
                                    className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-black"
                                />
                            </div>

                            <div>
                                <label className="block text-[15px] font-normal text-black mb-1">
                                    Email
                                </label>
                                <label className="block text-[13px] font-normal text-black mb-1">
                                    Will not be shared publicly
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="your email address"
                                    required
                                    disabled={loading}
                                    className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-black"
                                />
                            </div>

                            <div>
                                <label className="block text-[15px] font-normal text-black mb-1">
                                    Guest book entry
                                </label>
                                <label className="block text-[13px] font-normal text-black mb-1">
                                    Share a memory, message, or thoughts
                                </label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Your answer"
                                    required
                                    disabled={loading}
                                    rows={4}
                                    className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-black"
                                ></textarea>
                            </div>

                            <div>
                                <label className="block text-[15px] font-normal text-black mb-1">
                                    Private message (optional)
                                </label>
                                <label className="block text-[13px] font-normal text-black mb-1">
                                    Will not be shared publicly
                                </label>
                                <textarea
                                    name="privateMessage"
                                    value={formData.privateMessage}
                                    onChange={handleChange}
                                    placeholder="Your answer"
                                    disabled={loading}
                                    rows={3}
                                    className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-black"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                disabled={loading}
                                className={`rounded-[5px] w-[120px] h-9 sm:w-[130px] sm:h-[38px] md:w-[147px] md:h-10 block mx-auto text-sm sm:text-base transition ${loading
                                    ? "bg-gray-400 cursor-not-allowed"
                                    : "bg-[#4A8BED] hover:bg-[#3b7add] text-white"
                                    }`}
                            >
                                {loading ? "Submitting..." : "Submit"}
                            </button>
                        </form>
                    </>
                ) : (
                    <>
                        <h2 className="text-2xl font-semibold text-center mb-4">
                            Guestbook Entries
                        </h2>
                        <GuestbookEntries entries={entries} />
                        <button
                            onClick={() => setShowForm(true)}
                            className="mt-4 w-full bg-black text-white rounded-lg py-2 hover:bg-gray-800 transition"
                        >
                            + Add New Entry
                        </button>
                    </>
                )}
            </div>
        </div>
    );
};

export default GuestbookPopup;
