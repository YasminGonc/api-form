import { useContext } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { DataFormContext } from "../../../../context/DataFormContext";
import { DeliveryFormContainer, InputsContainer, InputWrapperBairro, InputWrapperCep, InputWrapperCidade, InputWrapperComplemento, InputWrapperNumero, InputWrapperRua, InputWrapperUf, TitleContainer } from "./styles";

interface ErrorsType {
    errors: {
        [key: string]: {
            message: string;
        }
    }
}

export function DeliveryForm() {
    const { register, getValues, formState, control, setValue } = useFormContext();

    const { errors } = formState as unknown as ErrorsType;

    const { dataFromApi, takeCepFromInput } = useContext(DataFormContext);

    function handleCepInput() {
        const cepInputValue = getValues('cep');
        const cepInputValueConverted = cepInputValue.replace(/-/, '');

        if (cepInputValueConverted.length === 8) {
            takeCepFromInput(cepInputValueConverted);
        }
    }

    if (dataFromApi) {
        setValue('rua', dataFromApi.logradouro);
    }

    return (
        <DeliveryFormContainer>
            <TitleContainer>
                <h2>Endereço de entrega</h2>
                <p>Informe o endereço onde deseja receber seu pedido</p>
            </TitleContainer>

            <InputsContainer>
                <InputWrapperCep>
                    <label htmlFor="cep">CEP</label>
                    <input
                        type="text"
                        id="cep"
                        placeholder="CEP"
                        {...register('cep', {
                            onBlur: () => handleCepInput()
                        })}
                    />
                    <span>{errors.cep?.message}</span>
                </InputWrapperCep>

                {/* <Controller
                    control={control}
                    name="rua"
                    render={({ field }) => {
                        return (
                            <InputWrapperRua>
                                <label htmlFor="rua">Rua</label>
                                <input type="text" id="rua" placeholder="Rua" value={dataFromApi?.logradouro} />
                            </InputWrapperRua>
                        )
                    }}
                /> */}
                <InputWrapperRua>
                    <label htmlFor="rua">Rua</label>
                    <input type="text" id="rua" placeholder="Rua" {...register('rua')} />
                </InputWrapperRua>
                <InputWrapperNumero>
                    <label htmlFor="numero">Número</label>
                    <input type="text" id="numero" placeholder="Número" {...register('numero')} />
                </InputWrapperNumero>
                <InputWrapperComplemento>
                    <label htmlFor="complemento">Complemento</label>
                    <input type="text" id="complemento" placeholder="Complemento" {...register('complemento')} />
                </InputWrapperComplemento>
                <InputWrapperBairro>
                    <label htmlFor="bairro">Bairro</label>
                    <input type="text" id="bairro" placeholder="Bairro" {...register('bairro')} />
                </InputWrapperBairro>
                <InputWrapperCidade>
                    <label htmlFor="cidade">Cidade</label>
                    <input type="text" id="cidade" placeholder="Cidade" {...register('cidade')} />
                </InputWrapperCidade>
                <InputWrapperUf>
                    <label htmlFor="uf">UF</label>
                    <input type="text" id="uf" placeholder="UF" {...register('uf')} />
                </InputWrapperUf>
            </InputsContainer>
        </DeliveryFormContainer>
    )
}