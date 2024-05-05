import spacy

# Load the language model
nlp = spacy.load('en_core_web_sm')

def process_text(text):
    # Process the text with the loaded model
    doc = nlp(text)

    # Example: Extracting named entities, noun phrases, and verbs
    entities = [(ent.text, ent.label_) for ent in doc.ents]
    noun_phrases = [chunk.text for chunk in doc.noun_chunks]
    verbs = [token.lemma_ for token in doc if token.pos_ == "VERB"]

    return {
        "entities": entities,
        "noun_phrases": noun_phrases,
        "verbs": verbs
    }

# Example usage
result = process_text("Apple is looking at buying U.K. startup for $1 billion")
print(result)
